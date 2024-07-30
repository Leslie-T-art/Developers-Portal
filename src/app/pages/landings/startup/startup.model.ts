export interface Integration {
    appLogo: string;
    app: string;
    description: string;
}

interface Availability {
    available: boolean;
    addon?: boolean;
}

export interface PlanFeature {
    name: string;
    starter: Availability;
    professional: Availability;
    enterprise: Availability;
}
