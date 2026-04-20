import { readFile } from "node:fs/promises";

export const readSource = (path) =>
  readFile(new URL(`../../${path}`, import.meta.url), "utf8");

export const assertIncludesAll = (assert, source, expectedValues, label) => {
  for (const expected of expectedValues) {
    assert.ok(source.includes(expected), `missing ${label}: ${expected}`);
  }
};
