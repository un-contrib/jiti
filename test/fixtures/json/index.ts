import imported from "./file.json";

import importedWithAssertion from "./file.json" assert { type: "json" };

const required = require("./file.json");

const debug = (label: string, value: any) =>
  console.log(label, ":", value, ".default:", value.default);

debug("Imported", imported);
debug("Imported with assertion", importedWithAssertion);
debug("Required", required);

const dynamicRes = await import("./file.json");
debug("Dynamic Imported", dynamicRes);
