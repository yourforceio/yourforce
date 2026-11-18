import type { Guide } from "@/types/guide";
import { schoolsGuide } from "./schools";
import { clinicGuide } from "./clinic";
import { gymGuide } from "./gym";
import { commerceGuide } from "./commerce";
import { dineGuide } from "./dine";
import { bookingsGuide } from "./bookings";
import { propertyGuide } from "./property";
import { societyGuide } from "./society";
import { rentacarGuide } from "./rentacar";
import { learnGuide } from "./learn";
import { eventsGuide } from "./events";
import { sitesGuide } from "./sites";
import { servicesGuide } from "./services";

/** Practical guides, one per product, in the order of the products page. */
export const guides: Guide[] = [schoolsGuide, learnGuide, clinicGuide, gymGuide, commerceGuide, dineGuide, bookingsGuide, propertyGuide, societyGuide, rentacarGuide, eventsGuide, servicesGuide, sitesGuide];
export const guideFor = (product: string) => guides.find((g) => g.product === product);
