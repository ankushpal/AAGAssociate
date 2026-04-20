import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("header provides primary site navigation and quote CTA", async () => {
  const header = await readSource("app/components/Header.tsx");

  assertIncludesAll(
    assert,
    header,
    ['href: "/"', 'href: "/about"', 'href: "/services"', 'href: "/projects"', 'href: "/contact"'],
    "nav item",
  );

  assert.ok(header.includes('href="/quote"'));
  assert.ok(header.includes("Get Quote"));
  assert.ok(header.includes("menuOpen"));
});
