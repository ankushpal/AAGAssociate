import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("services page lists every advertised service including surveillance", async () => {
  const services = await readSource("app/services/page.tsx");

  assertIncludesAll(
    assert,
    services,
    [
      "Residential Construction",
      "Commercial Construction",
      "Infrastructure Projects",
      "Industrial Construction",
      "Renovation & Remodeling",
      "Project Management",
      "Complete Security Surveillance Solutions",
    ],
    "service",
  );

  assert.ok(services.includes("CCTV"));
  assert.ok(services.includes("access control"));
  assert.match(services, /services\.map\(\(service\) =>/);
  assert.ok(services.includes('href="/quote"'));
});
