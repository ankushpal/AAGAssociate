import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("footer includes quick links, services, and contact details", async () => {
  const footer = await readSource("app/components/Footer.tsx");

  assertIncludesAll(
    assert,
    footer,
    [
      "AAG",
      "Quick Links",
      "Our Services",
      "Residential Construction",
      "Commercial Buildings",
      "Roads & Infrastructure",
      "Security Surveillance",
      "+91 8585925856",
      "info@aagassociate.com",
    ],
    "footer copy",
  );
});
