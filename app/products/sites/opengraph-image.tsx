import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { sitesPage } from "@/data/products/sites";

export const alt = ogAlt("sites");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("sites", sitesPage.hero.heading);
}
