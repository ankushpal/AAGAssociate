import assert from "node:assert/strict";
import { test } from "node:test";
import { readSource } from "./helpers/source.mjs";

test("root layout renders shared header, content, and footer", async () => {
  const layout = await readSource("app/layout.tsx");

  assert.match(layout, /<Header\s*\/>/);
  assert.match(layout, /<main[^>]*>\{children\}<\/main>/);
  assert.match(layout, /<Footer\s*\/>/);
  assert.match(layout, /lang=['"]en['"]/);
  assert.ok(layout.includes("AAG Associate"));
});
