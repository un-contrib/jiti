import unjs from "eslint-config-unjs";

export default unjs({
  ignores: ["test/fixtures/error-*"],
  rules: {
    "unicorn/no-null": 0,
    "unicorn/prefer-node-protocol": 0,
    "@typescript-eslint/no-require-imports": 0,
  },
});
