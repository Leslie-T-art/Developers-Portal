export interface BlogPost {
    image: string;
    tag: { variant: string; value: string };
    title: string;
    description?: string;
    postedBy?: {
        avatar: string;
        name: string;
    };
    postedOn?: {
        date: string;
        duration: string;
    };
}