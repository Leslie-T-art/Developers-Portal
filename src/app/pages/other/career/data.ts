// types
import { Benefit, Vacancy } from "./career.model";

const BENEFITS: Benefit[] = [
    {
        icon: 'compass',
        title: 'Relocation Support',
        description: "We'll help to move and get settled and handle the visa process for you",
    },
    {
        icon: 'server',
        title: 'Technology',
        description: 'A special training to get start with our technical stack by professionals',
    },
    {
        icon: 'dollar-sign',
        title: 'Growth budget',
        description: 'A specific budget for your professionals growth which you spend on throughout the year',
    },
    {
        icon: 'users',
        title: 'Team activities & retreats',
        description: "Many team building activities and retreat every quarter, so you don't get bored",
    },
    {
        icon: 'map-pin',
        title: 'Work from anywhere',
        description: 'Work from anywhere you like. We offer remote working to all the employees',
    },
    {
        icon: 'coffee',
        title: 'Work/life balance',
        description: 'Flexible work hours gives you complete balance with your personal and professional life.',
    },
];

const VACANCIES: Vacancy[] = [
    {
        designation: 'Techical Support Engineer',
        type: 'Remote',
        category: 'Engineering',
    },
    {
        designation: 'Senior Software Engineer (Frontend)',
        type: 'Remote',
        category: 'Engineering',
    },
    {
        designation: 'Senior Software Engineer (Backend)',
        type: 'Remote',
        category: 'Engineering',
    },
    {
        designation: 'Engineering Manager',
        type: 'Remote',
        category: 'Engineering',
    },
    {
        designation: 'Junior copywriter/editor',
        type: 'Remote',
        category: 'Marketing',
    }
];

export { BENEFITS, VACANCIES }