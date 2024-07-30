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
            username: 'test',
            email: 'prompt@coderthemes.com',
            password: 'test',
            firstName: 'Greeva',
            lastName: 'Navadiya',
            displayName: 'Greeva N',
            avatar: 'assets/images/avatars/img-8.jpg',
            location: 'California, USA',
            title: 'Web & Graphic Designer',
            phone: '+00 123-456-789'
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

