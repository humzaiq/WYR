export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function authenticateUser (id) {
    return {
        type: AUTHENTICATE_USER,
        id,
    }
}

export function logoutUser (id) {
    return{
        type: LOGOUT_USER,
        id,
    }
}