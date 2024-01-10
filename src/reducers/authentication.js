import { AUTHENTICATE_USER } from '../actions/authenticatedUser'
import { LOGOUT_USER } from '../actions/authenticatedUser'


export default function authenticatedUser (state = null, action) {
    console.log('Action:', action);

    switch(action.type) {
        case AUTHENTICATE_USER:
            return action.id;
        case LOGOUT_USER:
            return null;
        default:
            return state;
    }
}

