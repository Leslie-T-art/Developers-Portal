// types
import { BlogPost, JobDetail } from "./agency.model";

const BLOGPOSTS: BlogPost[] = [
    {
        badge: { text: 'Design', variant: 'secondary' },
        image: 'assets/images/hero/coworking1.jpg',
        date: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'Single page websites are taking over the world, and thats why I would like you to present the best ...',
    },
    {
        badge: { text: 'Development', variant: 'info' },
        image: 'assets/images/hero/coworking2.jpg',
        date: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
    },
    {
        badge: { text: 'Design', variant: 'secondary' },
        image: 'assets/images/hero/coworking3.jpg',
        date: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
    },
];

const JOBS: JobDetail[] = [
    {
        designation: 'Front-End Developer',
        location: 'Los Angeles',
        jobType: 'Remote',
    },
    {
        designation: 'Community Manager',
        location: 'New York',
        jobType: 'Full-Time',
    },
    {
        designation: 'UX/UI Designer',
        location: 'New York',
        jobType: 'Full-Time',
    },
];

export { BLOGPOSTS, JOBS }