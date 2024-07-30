import { BlogPost } from "./blog.model";

const BLOGPOSTS1: BlogPost[] = [
    {
        image: 'assets/images/blog/post1.jpg',
        tag: { variant: 'orange', value: 'Announcement' },
        title: 'Announcing the free upgrade for the subscribed plans',
        description:
            'We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...',
        postedBy: {
            avatar: 'assets/images/avatars/img-4.jpg',
            name: 'Emily Blunt',
        },
        postedOn: {
            date: '11 Mar, 2020',
            duration: '3 min read',
        },
    },
    {
        image: 'assets/images/blog/post1.jpg',
        tag: { variant: 'info', value: 'Community' },
        title: 'Will Web Design Ever Rule the World?',
        description:
            'The web is changed in the current era a lot. Many new trends are being used in the market at the moment...',
        postedBy: {
            avatar: 'assets/images/avatars/img-2.jpg',
            name: 'Greeva N',
        },
        postedOn: {
            date: '9 Mar, 2020',
            duration: '5 min read',
        },
    },
];

const BLOGPOSTS2: BlogPost[] = [
    {
        image: 'assets/images/blog/crypto1.jpg',
        tag: { variant: 'orange', value: 'Announcement' },
        title: 'Introducing new blazzing fast user interface',
        description:
            'Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...',
    },
    {
        image: 'assets/images/blog/crypto2.jpg',
        tag: { variant: 'success', value: 'Tutorial' },
        title: 'What you should know before considering the prompt',
        description:
            'We are giving a pretty extensive guideline and context before you make your decision to consider prompt...',
    },
    {
        image: 'assets/images/blog/crypto1.jpg',
        tag: { variant: 'info', value: 'Community' },
        title: 'Your Way to a Successful Sales Campaigns',
        description:
            'Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads...',
    },
];

export { BLOGPOSTS1, BLOGPOSTS2 };