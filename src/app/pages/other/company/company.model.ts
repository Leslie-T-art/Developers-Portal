// types
import { CountUpOptions } from 'countup.js';

export interface TeamMember {
    avatar: string;
    name: string;
    designation: string;
}

export interface Statistics {
    title: string;
    subTitle: string;
    stats: number;
    startWith: number;
    options: CountUpOptions
}
