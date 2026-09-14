export type ContactClickEvent =
  | "phone_click"
  | "whatsapp_click"
  | "directions_click"
  | "instagram_click";

const clickEvents: ReadonlyArray<readonly [string, ContactClickEvent]> = [
  ["tel:", "phone_click"],
  ["wa.me/", "whatsapp_click"],
  ["google.com/maps", "directions_click"],
  ["instagram.com/", "instagram_click"],
];

export function getContactClickEvent(href: string): ContactClickEvent | null {
  const normalizedHref = href.toLowerCase();
  return (
    clickEvents.find(([pattern]) => normalizedHref.includes(pattern))?.[1] ??
    null
  );
}
