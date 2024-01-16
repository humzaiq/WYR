import {
    GET_USERS,
    ADD_VOTE_TO_USER,
    SAVE_QUESTION_FOR_USER
 }
from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case GET_USERS: {
            return {
                ...state,
                ...action.users
            }
        }

        case SAVE_QUESTION_FOR_USER: {
            const authedUser = action.question.author
            const qid = action.question.id

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([qid])
                }
            }
        }

        case ADD_VOTE_TO_USER: {
            const { qid, answer, authedUser } = action.vote;

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        }

        default:
            return state
    }
}
