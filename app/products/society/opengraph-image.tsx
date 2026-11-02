import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { societyPage } from "@/data/products/society";

export const alt = ogAlt("society");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("society", societyPage.hero.heading);
}
