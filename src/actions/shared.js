import { getUsers, saveQuestionForUser, addVoteToUser } from './users'
import { authenticateUser, logoutUser } from './authenticatedUser'
import { getQuestions, createQuestion, receiveVote} from './questions'
import { getInitialData,
        saveQuestion,
        saveQuestionAnswer }
from '../utils/api'

const AUTHED_ID = null;

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(getUsers(users))
            dispatch(getQuestions(questions))
            dispatch(authenticateUser(AUTHED_ID))
        })
    }
}

export function handleUserAuthentication (userId) {
    return (dispatch) => {
         dispatch(authenticateUser(userId))
    }
}

export function handleUserLogout (userId) {
    return (dispatch) => {
        dispatch(logoutUser(userId))
    }
}

export function handleQuestionSubmission (optionOne, optionTwo, authenticatedUser) {
    const question = {
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authenticatedUser,
    }

    return (dispatch) => {
            return saveQuestion(question)
                .then((savedQuestion) => {
                    dispatch(createQuestion(savedQuestion))
                    dispatch(saveQuestionForUser(savedQuestion));
            })
        }
    }

    export function handleVoteSubmission({ authedUser, answer, qid }) {
    const vote = {
        authedUser,
        qid,
        answer,
    };

    return (dispatch) => {
        saveQuestionAnswer(vote)
        .then ((e) => {
            dispatch(addVoteToUser(vote))
            dispatch(receiveVote(vote))
        })
        .catch (error => {
            console.error("Error ---:", error);
        })
    };
}
