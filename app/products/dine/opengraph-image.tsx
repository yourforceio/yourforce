import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { dinePage } from "@/data/products/dine";

export const alt = ogAlt("dine");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("dine", dinePage.hero.heading);
}
