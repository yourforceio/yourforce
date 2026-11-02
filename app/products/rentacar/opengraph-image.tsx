import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { rentacarPage } from "@/data/products/rentacar";

export const alt = ogAlt("rentacar");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("rentacar", rentacarPage.hero.heading);
}
