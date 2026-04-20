import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("projects page lists portfolio items and enquiry CTA", async () => {
  const projects = await readSource("app/projects/page.tsx");

  assertIncludesAll(
    assert,
    projects,
    [
      "Residential Housing Project",
      "Commercial Office Complex",
      "Highway Infrastructure Project",
      "Industrial Warehouse",
      "Government School Building",
      "Hospital Construction",
    ],
    "project",
  );

  assert.ok(projects.includes("Projects Completed"));
  assert.ok(projects.includes("Ongoing Projects"));
  assert.ok(projects.includes('href="/contact"'));
});
