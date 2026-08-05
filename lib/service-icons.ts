import {
  Building2,
  CloudCog,
  MonitorSmartphone,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

export const serviceIcons = {
  commercePlatform: ShoppingCart,
  headlessStorefront: MonitorSmartphone,
  modernization: RefreshCw,
  integrations: CloudCog,
  enterpriseSoftware: Building2,
};

export type ServiceIcon =
  keyof typeof serviceIcons;