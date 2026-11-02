import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { commercePage } from "@/data/products/commerce";

export const alt = ogAlt("commerce");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("commerce", commercePage.hero.heading);
}
