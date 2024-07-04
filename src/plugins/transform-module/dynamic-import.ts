// Based on babel-plugin-transform-modules-commonjs v7.24.7
// MIT - Copyright (c) 2014-present Sebastian McKenzie and other contributors
// https://github.com/babel/babel/tree/c7bb6e0f/packages/babel-plugin-transform-modules-commonjs/src

// Heavily inspired by
// https://github.com/airbnb/babel-plugin-dynamic-import-node/blob/master/src/utils.js

import type { BabelFile, NodePath } from "@babel/core";
import { types as t, template } from "@babel/core";
import { buildDynamicImport } from "@babel/helper-module-transforms";

const requireInterop = (
  source: t.Expression,
  file: BabelFile,
  noInterop: boolean | undefined,
) => {
  const exp = template.expression.ast`jitiImport(${source})`;
  if (noInterop) {
    return exp;
  }
  return t.callExpression(t.memberExpression(exp, t.identifier("then")), [
    t.arrowFunctionExpression(
      [t.identifier("m")],
      t.callExpression(file.hub.addHelper("interopRequireWildcard"), [
        t.identifier("m"),
      ]),
    ),
  ]);
};

export function transformDynamicImport(
  path: NodePath<t.CallExpression | t.ImportExpression>,
  noInterop: boolean | undefined,
  file: BabelFile,
) {
  path.replaceWith(
    buildDynamicImport(path.node, true, false, (specifier) =>
      requireInterop(specifier, file, noInterop),
    ),
  );
}
