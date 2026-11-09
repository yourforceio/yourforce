import productOgImage, { ogAlt, ogContentType, ogSize } from "@/components/products/productOgImage";
import { servicesPage } from "@/data/products/services";

export const alt = ogAlt("services");
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return productOgImage("services", servicesPage.hero.heading);
}
