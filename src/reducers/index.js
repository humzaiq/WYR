import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import votes from './votes'
import authenticatedUser from './authentication'


export default combineReducers({
    users,
    questions,
    authenticatedUser,
    votes,
})