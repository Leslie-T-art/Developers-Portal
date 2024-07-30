import { Statistics, TeamMember } from "./company.model";

const TEAM: TeamMember[] = [
    {
        avatar: 'assets/images/avatars/img-1.jpg',
        name: 'Ana Russo',
        designation: 'CEO',
    },
    {
        avatar: 'assets/images/avatars/img-2.jpg',
        name: 'Danette Payne',
        designation: 'CTO',
    },
    {
        avatar: 'assets/images/avatars/img-3.jpg',
        name: 'Tammy Ward',
        designation: 'VP, Product Development',
    },
    {
        avatar: 'assets/images/avatars/img-4.jpg',
        name: 'Paul Moore',
        designation: 'Back-End Developer',
    },
    {
        avatar: 'assets/images/avatars/img-5.jpg',
        name: 'Harry Burris',
        designation: 'PHP Developer',
    },
    {
        avatar: 'assets/images/avatars/img-6.jpg',
        name: 'Patricia Ferraro',
        designation: 'Web Designer',
    },
    {
        avatar: 'assets/images/avatars/img-7.jpg',
        name: 'Robert Smith',
        designation: 'Graphic Designer',
    },
    {
        avatar: 'assets/images/avatars/img-8.jpg',
        name: 'Lindsay Clark',
        designation: 'Web Designer',
    },
    {
        avatar: 'assets/images/avatars/img-2.jpg',
        name: 'Lindsay Clark',
        designation: 'Front-End Developer',
    },
    {
        avatar: 'assets/images/avatars/img-4.jpg',
        name: 'Ernest Griffith',
        designation: 'PHP Developer',
    },
    {
        avatar: 'assets/images/avatars/img-6.jpg',
        name: 'Cecelia Poole',
        designation: 'Back-End Developer',
    },
    {
        avatar: 'assets/images/avatars/img-3.jpg',
        name: 'Morris Hall',
        designation: 'Graphic Designer',
    },
];

const STATISTICS: Statistics[] = [
    {
        title: 'Products Built',
        subTitle: 'helped clients across the globe',
        stats: 100,
        startWith: 10,
        options: {
            suffix: '+',
            duration: 5
        }
    },
    {
        title: 'Revenue Generated',
        subTitle: 'across 10+ countries',
        stats: 21,
        startWith: 5,
        options: {
            prefix: '$',
            suffix: 'M+',
            duration: 5
        }
    },
    {
        title: 'Satisfied Clients',
        subTitle: 'across 100+ locations',
        stats: 100,
        startWith: 10,
        options: {
            suffix: '+',
            duration: 5
        }
    },
    {
        title: 'Awards Won',
        subTitle: 'on Awwwards, CSS Design Awards',
        stats: 10,
        startWith: 1,
        options: {
            suffix: '+',
            duration: 5
        }
    },
];

export { TEAM, STATISTICS }