export interface PricingPlan {
    id?: number;
    name?: string;
    price?: number;
    duration?: string;
    features?: string[];
    recommended?: boolean;
    popular?: boolean;
}
