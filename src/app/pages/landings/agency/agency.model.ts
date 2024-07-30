export interface BlogPost {
    badge: {
        text: string;
        variant: string;
    };
    image: string;
    date: string;
    title: string;
    description: string;
}

export interface JobDetail {
    designation: string;
    location: string;
    jobType: string;
}
