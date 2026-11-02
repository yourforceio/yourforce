import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { clinicPage } from "@/data/products/clinic";

export const alt = ogAlt("clinic");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("clinic", clinicPage.hero.heading);
}
