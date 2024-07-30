// types
import { CountUpOptions } from 'countup.js';

export interface SpaceOption {
    image: string;
    title: string;
    description: string;
    footer: {
        icon: string;
        text: string;
    };
}

export interface Testimonial {
    text: string;
    customer: {
        avatar: string;
        name: string;
        designation: string;
    };
    logo: string;
}

export interface Statistics {
    stats: number;
    title: string;
    options: CountUpOptions
}
