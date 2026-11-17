import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { gymPage } from "@/data/products/gym";

export const alt = ogAlt("gym");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("gym", gymPage.hero.heading);
}
