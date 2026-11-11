import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { eventsPage } from "@/data/products/events";

export const alt = ogAlt("events");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("events", eventsPage.hero.heading);
}
