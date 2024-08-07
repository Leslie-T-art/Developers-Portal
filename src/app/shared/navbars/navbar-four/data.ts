import { Notification, ProfileOption, TopNavItem } from "./navbar-four.model";


const TOPMENU: TopNavItem[] = [
    {
        icon: 'grid',
        name: 'Home',
        redirectTo: '.'},
    {
        icon: 'folder',
        redirectTo: '/auth/logout',
        name: 'Projects'
    },
    {
        icon: 'list',
        redirectTo: '/auth/logout',

        name: 'Tasks'
    },
    {
        icon: 'bar-chart-2',
        redirectTo: '/auth/logout',

        name: 'Reports'
    },
    {
        icon: 'tool',
        redirectTo: '/pages/account/settings',
        name: 'Settings'
    }
];

const NOTIFICATIONS: Notification[] = [
    {
        id: 1,
        icon: 'user-plus',
        variant: 'primary',
        text: 'New User Registered',
        subText: '2 min ago',
    },
    {
        id: 2,
        icon: 'message-square',
        variant: 'orange',
        text: 'A new comment on your post',
        subText: '3 min ago',
    },
    {
        id: 3,
        icon: 'paperclip',
        variant: 'success',
        text: 'A new message from',
        subText: '10 min ago',
    },
    {
        id: 4,
        icon: 'heart',
        variant: 'danger',
        text: 'A new like on your comment',
        subText: '14 min ago',
    },
];

const PROFILEOPTIONS: ProfileOption[] = [
    {
        icon: 'user',
        label: 'Profile',
        redirectTo: '.',
    },
    {
        icon: 'settings',
        label: 'Settings',
        redirectTo: '/pages/account/settings',
    },
    {
        icon: 'aperture',
        label: 'Support',
        redirectTo: '.',
    },
    {
        icon: 'unlock',
        label: 'Sign Out',
        redirectTo: '/auth/logout',
    },
];

export { TOPMENU, NOTIFICATIONS, PROFILEOPTIONS };