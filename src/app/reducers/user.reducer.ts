import {User} from '../models/user';

export const user = function(state: User = null, action) {
    switch (action.type) {
        case 'GET_USER_FROM_STORAGE':
            return JSON.parse(localStorage.getItem('user'));
        case 'ADD_USER':
            return action.payload;
        default:
            return state;
    }
};
