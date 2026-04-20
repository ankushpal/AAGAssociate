import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("home page contains hero, service previews, stats, and CTA links", async () => {
  const home = await readSource("app/page.tsx");

  assertIncludesAll(
    assert,
    home,
    [
      "Building the",
      "Future",
      "Restoring the",
      "Past",
      "Our",
      "Services",
      "Why",
      "Choose Us",
      "250+",
      "Ready to Start Your",
    ],
    "home copy",
  );

  assertIncludesAll(assert, home, ['href="/quote"', 'href="/projects"', 'href="/contact"'], "home link");
});
