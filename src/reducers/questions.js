import { GET_QUESTIONS, CREATE_QUESTION, GET_ID } from '../actions/questions'


export default function questions (state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case CREATE_QUESTION:
            console.log("create_question reducer", action )
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
        default:
            return state
    }
}