import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import authenticatedUser from './authentication'

export default combineReducers({
    users,
    questions,
    authenticatedUser,
})