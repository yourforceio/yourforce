import {
    ShoppingCart,
    MonitorSmartphone,
    Building2,
    CloudCog,
    LayoutTemplate,
    Lightbulb,
} from "lucide-react";

export const serviceIcons = {
    shoppingCart: ShoppingCart,
    monitorSmartphone: MonitorSmartphone,
    building2: Building2,
    cloudCog: CloudCog,
    layoutTemplate: LayoutTemplate,
    lightBulb: Lightbulb,
};

export type ServiceIcon = keyof typeof serviceIcons;