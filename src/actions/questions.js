export const GET_QUESTIONS = 'GET_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_ID = 'GET_ID'
export const RECEIVE_VOTE = 'RECEIVE_VOTE';

export function getQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions: questions,
    }
}

export function createQuestion (question) {
    return {
        type: CREATE_QUESTION,
        question,
    };
}

export function getId (id) {
    return {
        type: GET_ID,
        id,
    }
}

export function receiveVote (vote) {
    return {
        type: RECEIVE_VOTE,
        vote,
    }
}