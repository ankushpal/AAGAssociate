import assert from "node:assert/strict";
import { test } from "node:test";
import { readSource } from "../helpers/source.mjs";

test("google map component uses a lazy embedded iframe", async () => {
  const googleMap = await readSource("app/components/GoogleMap.tsx");

  assert.ok(googleMap.includes("<iframe"));
  assert.ok(googleMap.includes("https://www.google.com/maps/embed"));
  assert.ok(googleMap.includes('loading="lazy"'));
  assert.ok(googleMap.includes('referrerPolicy="no-referrer-when-downgrade"'));
});
