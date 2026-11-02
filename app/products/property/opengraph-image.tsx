import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { propertyPage } from "@/data/products/property";

export const alt = ogAlt("property");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("property", propertyPage.hero.heading);
}
