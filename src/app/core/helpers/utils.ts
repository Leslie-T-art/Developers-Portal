// types
import { User } from "../models/auth.models";

/**
 * @returns registered user list
 */
function getAllUsers(): User[] {
    // array in session storage for registered users
    let users: User[] = JSON.parse(sessionStorage.getItem('users')!) || [
        {
            id: 1,
            username: 'Leslie',
            email: 'quickpi@xplug.co.zw',
            password: 'test',
            firstName: 'Leslie',
            lastName: 'Chihwai',
            displayName: 'Leslie C',
            avatar: 'assets/images/avatars/img-8.jpg',
            location: 'Harare, Zimbabwe',
            title: 'Web & Graphic Designer, UI/UX',
            phone: '0785670693'
        }
    ];
    return users;
}


/**
 * Returns the current user
 */
function loggedInUser(): User | null {
    let user: User | null = {};
    user = JSON.parse(sessionStorage.getItem('currentUser')!);
    return user;
}

export { getAllUsers, loggedInUser };

