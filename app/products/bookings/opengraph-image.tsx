import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { bookingsPage } from "@/data/products/bookings";

export const alt = ogAlt("bookings");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("bookings", bookingsPage.hero.heading);
}
