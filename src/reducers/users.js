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

        // console.log("this is the SACE_QIUESTOPIN_FOR USER", authedUser, qid)
        console.log("test test test", state)
        console.log("tthis is the actoin from add vote to user", action)


            // const updatedUsers = {
            //     ...state.users,
            //     [authedUser]: {
            //         ...state.users[authedUser].answers,
            //         [qid]: answer
            //     }
            // }
            return {
                ...state,
                // users: updatedUsers
            }

        }
        default:
            return state
    }
}
