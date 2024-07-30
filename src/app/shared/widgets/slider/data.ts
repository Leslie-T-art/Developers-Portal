// types
import { AuthSlider, SliderItem } from "./slider.model";

const SLIDES1: AuthSlider[] = [
    {
        image: 'assets/images/hero/saas1.jpg',
        slideTitle: 'Manage your saas business with ease',
        description: 'Make your saas application stand out with high-quality landing page designed and developed by professional.'
    },
    {
        image: 'assets/images/hero/saas2.jpg',
        slideTitle: 'The best way to showcase your mobile app',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    },
    {
        image: 'assets/images/hero/saas3.jpg',
        slideTitle: 'Smart Solution that convert Lead to Customer',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    }
];

const SLIDES2: SliderItem[] = [
    {
        text: ' This app is a truly blessing for all professionals! A day to day project management was never easy for me.But with prompt, I can manage more than 100 projects easily.',
        customer: {
            avatar: 'assets/images/avatars/img-8.jpg',
            name: 'Cersei Lannister',
            designation: 'Senior Project Manager',
        },
        logo: 'assets/images/brands/amazon.svg',
    },
    {
        text: 'It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others.Simply loved it!',
        customer: {
            avatar: 'assets/images/avatars/img-5.jpg',
            name: 'John Stark',
            designation: 'Engineering Director',
        },
        logo: 'assets/images/brands/google.svg',
    },
];


export { SLIDES1, SLIDES2 };