import { getUsers, saveQuestionForUser, addVoteToUser } from './users'
import { authenticateUser, logoutUser } from './authenticatedUser'
import { getQuestions, createQuestion } from './questions'
import { receiveVote } from './votes'
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
    console.log("this is the question object", authenticatedUser);

    return (dispatch) => {
            return saveQuestion(question)
                .then((savedQuestion) => {
                    console.log('Value returned from saveQuestion:', savedQuestion);
                    dispatch(createQuestion(savedQuestion))
                    dispatch(saveQuestionForUser(savedQuestion));
            })
        }
    }


// export function handleVoteSubmission(selectedOption, questionId, authenticatedUser) {
    export function handleVoteSubmission({ authedUser, answer, qid }) {

    console.log("selectedOption, questionId, authenticatedUser", authedUser, answer, qid)

    const vote = {
        authedUser,
        qid,
        answer,
    };

    console.log("ffffff", vote)


    return (dispatch) => {
        saveQuestionAnswer(vote)
        .then ((e) => {
            console.log("eeeeeee", vote)
            dispatch(addVoteToUser(vote))
            dispatch(receiveVote(vote))

        })
            // console.log("this is the response", response)
        .catch (error => {
            console.error("Error ---:", error);
        })
    };
}
