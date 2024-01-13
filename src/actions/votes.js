export const RECEIVE_VOTE = 'RECEIVE_VOTE';

export function receiveVote (vote) {
    return {
        type: RECEIVE_VOTE,
        vote,
    }
}