import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import authenticatedUser from './authentication'
import thunk from 'redux-thunk';


export default combineReducers({
    users,
    questions,
    authenticatedUser,
    // votes
})