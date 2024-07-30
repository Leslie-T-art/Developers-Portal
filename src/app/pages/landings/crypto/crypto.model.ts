export interface Coin {
    icon: string;
    name: string;
}

export interface Blog {
    image: string;
    ribbon: {
        text: string;
        variant: string;
    };
    date: string;
    duration: number;
    title: string;
}