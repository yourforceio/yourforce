import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { learnPage } from "@/data/products/learn";

export const alt = ogAlt("learn");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("learn", learnPage.hero.heading);
}
