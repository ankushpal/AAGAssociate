import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("quote page validates project request fields and budget options", async () => {
  const quote = await readSource("app/quote/page.tsx");

  assertIncludesAll(
    assert,
    quote,
    [
      'name: ""',
      'email: ""',
      'phone: ""',
      'projectType: ""',
      'budget: ""',
      'location: ""',
      'message: ""',
    ],
    "quote state field",
  );

  assertIncludesAll(
    assert,
    quote,
    [
      "Name is required",
      "Valid email required",
      "Valid phone number required",
      "Select project type",
      "Select budget range",
      "Project location required",
      "Quote request submitted successfully!",
    ],
    "quote validation",
  );

  assertIncludesAll(
    assert,
    quote,
    ["<option>Residential</option>", "<option>Commercial</option>", "<option>Industrial</option>", "<option>Infrastructure</option>", "<option>Government</option>"],
    "quote option",
  );
});
