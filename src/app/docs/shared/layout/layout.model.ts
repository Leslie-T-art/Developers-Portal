export interface MenuItem {
    key: string;
    label: string;
    url?: string;
    children?: MenuItem[];
}