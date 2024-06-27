import { lstatSync, accessSync, constants, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { isAbsolute, join } from "pathe";
import type { PackageJson } from "pkg-types";
import { interopDefault as mllyInteropDefault, pathToFileURL } from "mlly";
import { isWindows } from "std-env";
import { Context } from "./types";

export function isDir(filename: string): boolean {
  try {
    const stat = lstatSync(filename);
    return stat.isDirectory();
  } catch {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

export function isWritable(filename: string): boolean {
  try {
    accessSync(filename, constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

export function md5(content: string, len = 8) {
  return createHash("md5").update(content).digest("hex").slice(0, len);
}

export function isObject(val: any) {
  return val !== null && typeof val === "object";
}

export function readNearestPackageJSON(path: string): PackageJson | undefined {
  while (path && path !== "." && path !== "/") {
    path = join(path, "..");
    try {
      const pkg = readFileSync(join(path, "package.json"), "utf8");
      try {
        return JSON.parse(pkg);
      } catch {
        // Ignore errors
      }
      break;
    } catch {
      // Ignore errors
    }
  }
}

export function wrapModule(source: string, opts?: { async?: boolean }) {
  return `(${opts?.async ? "async " : ""}function (exports, require, module, __filename, __dirname, jitiImport) { ${source}\n});`;
}

export function debug(ctx: Context, ...args: string[]) {
  if (ctx.opts.debug) {
    console.log("[jiti]", ...args);
  }
}

export function jitiInteropDefault(ctx: Context, mod: any) {
  return ctx.opts.interopDefault ? mllyInteropDefault(mod) : mod;
}

export function normalizeWindowsImportId(id: string) {
  if (!isWindows || !isAbsolute(id)) {
    return id;
  }
  return pathToFileURL(id);
}
