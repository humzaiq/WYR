export const GET_USERS = 'GET_USERS';
export const ADD_VOTE_TO_USER = 'ADD_VOTE_TO_USER'
export const SAVE_QUESTION_FOR_USER = 'SAVE_QUESTION_FOR_USER'

export function getUsers (users) {
    return {
        type: GET_USERS,
        users,
    }
}

export function saveQuestionForUser (question){
    return {
        type: SAVE_QUESTION_FOR_USER,
        question,
    }
}

export function addVoteToUser (vote) {
    return {
        type: ADD_VOTE_TO_USER,
        vote,
    }
}