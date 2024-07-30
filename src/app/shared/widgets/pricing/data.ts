// types
import { PricingPlan } from "src/app/shared/widgets/pricing/pricing.model";

const PLANS: PricingPlan[] = [
    {
        id: 1,
        name: 'Starter',
        price: 49,
        features: ['Up to 600 minutes usage time', 'Use for personal only', 'Add up to 10 attendees', 'Technical support via email'],
        recommended: false
    },
    {
        id: 2,
        name: 'Professional',
        price: 99,
        features: ['Up to 6000 minutes usage time', 'Use for personal or a commercial client', 'Add up to 100 attendees', 'Up to 5 teams', 'Technical support via email'],
        recommended: true
    },
    {
        id: 3,
        name: 'Enterprise',
        price: 599,
        features: ['Unlimited usage time', 'Use for personal or a commercial client', 'Add Unlimited attendees', '24x7 Technical support via phone', 'Technical support via email'],
        recommended: false
    },
];

export { PLANS };