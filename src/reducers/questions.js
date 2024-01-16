import {
    GET_QUESTIONS,
    CREATE_QUESTION,
    GET_ID,
    RECEIVE_VOTE } from '../actions/questions'


export default function questions (state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case CREATE_QUESTION:
            const newQuestion = action.question

            return {
                ...state,
                ...state.questions,
                [newQuestion.id]: newQuestion
            }
        case GET_ID:
            return {
                ...state,
                ...action.id
            }

        case RECEIVE_VOTE:{
            const { qid, answer, authedUser} = action.vote

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        }

        default:
            return state
    }
}



