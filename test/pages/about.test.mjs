import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("about page covers story, mission, vision, values, and CTA", async () => {
  const about = await readSource("app/about/page.tsx");

  assertIncludesAll(
    assert,
    about,
    [
      "About",
      "AAG Associate",
      "Our",
      "Story",
      "Our Mission",
      "Our Vision",
      "Core Values",
      "Quality",
      "Safety",
      "Integrity",
      "Innovation",
      "Let’s Build Something",
    ],
    "about copy",
  );

  assert.ok(about.includes('href="/contact"'));
});
