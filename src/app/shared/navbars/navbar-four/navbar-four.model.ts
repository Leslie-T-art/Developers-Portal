export interface Notification {
    id: number;
    text: string;
    icon: string;
    subText: string;
    variant: string;
}

export interface ProfileOption {
    label: string;
    icon: string;
    redirectTo: string;
}

export interface TopNavItem {
    icon: string;
    name: string;
}
