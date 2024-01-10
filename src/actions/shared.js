import { getUsers } from './users'
import { authenticateUser, logoutUser } from './authenticatedUser'
import { getQuestions, createQuestion } from './questions'
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
    console.log("this is the question object", question);

    return (dispatch) => {
            return saveQuestion(question)
                .then((savedQuestion) => {
                    console.log('Value returned from saveQuestion:', savedQuestion);
                    dispatch(createQuestion(savedQuestion));
            })
        }
    }


export function handleVoteSubmission(selectedOption, questionId, authenticatedUser) {
    // Make sure selectedOption is valid
    if (typeof selectedOption === 'undefined') {
        throw new Error('selectedOption is undefined');
    }

    // Define the vote object
    const vote = {
        authedUser: authenticatedUser,
        qid: questionId,
        answer: selectedOption,
    };

    return async (dispatch) => {
        try {
            const response = await saveQuestionAnswer(vote)
            console.log("this is the response", response)
                dispatch(updateQuestionState(response))
        }
        catch (error) {
            console.error("Error:", error);
        }
    };
}



// export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         users = {
//           ...users,
//           [authedUser]: {
//             ...users[authedUser],
//             answers: {
//               ...users[authedUser].answers,
//               [qid]: answer
//             }
//           }
//         }

//         questions = {
//           ...questions,
//           [qid]: {
//             ...questions[qid],
//             [answer]: {
//               ...questions[qid][answer],
//               votes: questions[qid][answer].votes.concat([authedUser])
//             }
//           }
//         }

//         res()
//       }, 500)
//     })
//   }