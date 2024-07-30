export interface AuthSlider {
    image: string;
    slideTitle: string;
    description: string;
}

export interface SliderItem {
    text: string;
    customer: {
        avatar: string;
        name: string;
        designation: string;
    };
    logo?: string;
}