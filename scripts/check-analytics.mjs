import assert from "node:assert/strict";
import { getContactClickEvent } from "../src/lib/analytics.ts";

assert.equal(getContactClickEvent("tel:+905063710071"), "phone_click");
assert.equal(getContactClickEvent("https://wa.me/905063710071"), "whatsapp_click");
assert.equal(
  getContactClickEvent("https://www.google.com/maps/place/Ebrar+Optik"),
  "directions_click",
);
assert.equal(
  getContactClickEvent("https://www.instagram.com/ebrar.optik71/"),
  "instagram_click",
);
assert.equal(getContactClickEvent("https://ebrar-optik.com/gozluk"), null);

console.log("Analytics tıklama eşleştirmeleri doğru.");
