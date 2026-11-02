import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { schoolsPage } from "@/data/products/schools";

export const alt = ogAlt("schools");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("schools", schoolsPage.hero.heading);
}
