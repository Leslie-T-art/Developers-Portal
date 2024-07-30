// types
import { Feature } from "../shared/landings.model";
import { SpaceOption, Statistics, Testimonial } from "./coworking.model";

const STATISTICS: Statistics[] = [
    {
        stats: 21,
        title: 'Meeting Rooms',
        options: {
            duration: 3
        }
    },
    {
        stats: 51,
        title: 'Event Spaces',
        options: {
            duration: 3
        }
    },
    {
        stats: 11,
        title: 'Studio Rooms',
        options: {
            duration: 3
        }
    },
    {
        stats: 500,
        title: 'Seating Spaces',
        options: {
            duration: 3,
            suffix: '+'
        }
    }
];

const FEATURES: Feature[] = [
    {
        icon: 'hard-drive',
        title: 'High-Speed Wireless',
        description: "We've watched Bootstrap grow up over the years and understand it better than almost anyone.",
    },
    {
        icon: 'users',
        title: 'Community Events',
        description:
            'You have a business to run. Stop worring about cross-browser keeping your components up to date. ',
    },
    {
        icon: 'command',
        title: 'Exercise Facilities',
        description:
            'Replacing a maintains the amount of lines. When replacing a selection objectives and then create.',
    },
    {
        icon: 'cpu',
        title: 'Comfortable Lounges',
        description: 'Risus sed vulputate odio ut enim blandit. Malesuada consequat interdum mattis facilisis.',
    },
];

const SPACEOPTIONS: SpaceOption[] = [
    {
        image: 'assets/images/photos/8.jpg',
        title: 'Shared Desk',
        description:
            "Access to shared workspace and conference rooms. Most suitable to individual looking for people's company.",
        footer: {
            icon: 'user',
            text: '1-5 Shared Spaces',
        },
    },
    {
        image: 'assets/images/photos/5.jpg',
        title: 'Dedicated Desk',
        description: 'A dedicated desk space for you, with 24/7 access to premium amenities and conference rooms.',
        footer: {
            icon: 'user',
            text: '1-5 Dedicated Spaces',
        },
    },
    {
        image: 'assets/images/photos/4.jpg',
        title: 'Event Space',
        description:
            'An excluisive venue designed specifically for events of all kinds, from conferences to celebrations.',
        footer: {
            icon: 'users',
            text: 'Upto 200 People',
        },
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        text: 'Great office and great location. Worth the money if it makes sense for your business.',
        customer: {
            avatar: 'assets/images/avatars/img-8.jpg',
            name: 'Cersei Lannister',
            designation: 'Senior Project Manager',
        },
        logo: 'assets/images/brands/google.svg',
    },
    {
        text: 'Awesome vibe and great staff! Top cooworking spots in the city! Loved to be here!',
        customer: {
            avatar: 'assets/images/avatars/img-5.jpg',
            name: 'John Stark',
            designation: 'Engineering Director',
        },
        logo: 'assets/images/brands/amazon.svg',
    },
];

export { STATISTICS, FEATURES, SPACEOPTIONS, TESTIMONIALS };