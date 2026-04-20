import assert from "node:assert/strict";
import { test } from "node:test";
import { assertIncludesAll, readSource } from "../helpers/source.mjs";

test("contact page validates required fields and embeds the map", async () => {
  const contact = await readSource("app/contact/page.tsx");

  assertIncludesAll(assert, contact, ['name: ""', 'email: ""', 'phone: ""', 'message: ""'], "contact state field");
  assert.ok(contact.includes("info@aagassociate.com"));

  assertIncludesAll(
    assert,
    contact,
    [
      "Name is required",
      "Enter a valid email address",
      "Enter a valid 10-digit phone number",
      "Message is required",
      "Message sent successfully!",
    ],
    "contact validation",
  );

  assert.ok(contact.includes("<GoogleMap/>"));
});
