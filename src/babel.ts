import { transformSync } from "@babel/core";
import type {
  TransformOptions as BabelTransformOptions,
  PluginItem,
} from "@babel/core";
import { TransformOptions, TRANSFORM_RESULT } from "./types";
import { TransformImportMetaPlugin } from "./plugins/babel-plugin-transform-import-meta";
import { importMetaEnvPlugin } from "./plugins/import-meta-env";
import transformModulesPlugin from "./plugins/transform-module";

export default function transform(opts: TransformOptions): TRANSFORM_RESULT {
  const _opts: BabelTransformOptions & { plugins: PluginItem[] } = {
    babelrc: false,
    configFile: false,
    compact: false,
    retainLines:
      typeof opts.retainLines === "boolean" ? opts.retainLines : true,
    filename: "",
    cwd: "/",
    ...opts.babel,
    plugins: [
      [transformModulesPlugin, { allowTopLevelThis: true, async: opts.async }],
      [TransformImportMetaPlugin, { filename: opts.filename }],
      [require("@babel/plugin-syntax-class-properties")],
      [require("@babel/plugin-transform-export-namespace-from")],
      [importMetaEnvPlugin],
    ],
  };

  if (opts.ts) {
    _opts.plugins.push([
      require("@babel/plugin-transform-typescript"),
      { allowDeclareFields: true },
    ]);
    // `unshift` because these plugin must come before `@babel/plugin-syntax-class-properties`
    _opts.plugins.unshift(
      [require("babel-plugin-transform-typescript-metadata")],
      [require("@babel/plugin-proposal-decorators"), { legacy: true }],
    );
    _opts.plugins.push(require("babel-plugin-parameter-decorator"));
    _opts.plugins.push(require("@babel/plugin-syntax-import-assertions"));
  }

  if (opts.babel && Array.isArray(opts.babel.plugins)) {
    _opts.plugins?.push(...opts.babel.plugins);
  }

  try {
    return {
      code: transformSync(opts.source, _opts)?.code || "",
    };
  } catch (error: any) {
    return {
      error,
      code:
        "exports.__JITI_ERROR__ = " +
        JSON.stringify({
          filename: opts.filename,
          line: error.loc?.line || 0,
          column: error.loc?.column || 0,
          code: error.code
            ?.replace("BABEL_", "")
            .replace("PARSE_ERROR", "ParseError"),
          message: error.message?.replace("/: ", "").replace(/\(.+\)\s*$/, ""),
        }),
    };
  }
}
