// types
import { PricingPlan } from "src/app/shared/widgets/pricing/pricing.model";
import { Benefit } from "./pricing.model";

const PLANS: PricingPlan[] = [
    {
        id: 1,
        name: 'Starter',
        price: 49,
        features: [
            'Up to 600 minutes usage time',
            'Use for personal only',
            'Add up to 10 attendees',
            '1 User',
            'Technical support via email',
        ],
        recommended: false,
    },
    {
        id: 2,
        name: 'Professional',
        price: 99,
        features: [
            'Up to 6000 minutes usage time',
            'Use for personal or a commercial client',
            'Add up to 100 attendees',
            'Up to 5 teams',
            'Technical support via email',
        ],
        recommended: true,
        popular: true,
    },
    {
        id: 3,
        name: 'Enterprise',
        price: 599,
        features: [
            'Unlimited usage time',
            'Use for personal or a commercial client',
            'Add Unlimited attendees',
            '24x7 Technical support via phone',
            'Technical support via email',
        ],
        recommended: false,
    },
];

const BENEFITS: Benefit[] = [
    {
        icon: 'phone-call',
        title: 'Technical Support',
        description: 'Our professional technical support team will help you out at every step',
    },
    {
        icon: 'compass',
        title: 'Technology',
        description: 'A special training to get start with the platform by professionals',
    },
    {
        icon: 'bar-chart-2',
        title: 'Growth Analysis',
        description: 'A dedicated team to get insights around your growth every month',
    },
    {
        icon: 'coffee',
        title: 'Rewards',
        description: 'A special reward for the most performing account every month',
    },
];

export { PLANS, BENEFITS }