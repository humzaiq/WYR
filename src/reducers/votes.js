import { RECEIVE_VOTE } from '../actions/votes'


export default function receiveVote(state = {} , action) {

    switch(action.type) {
        case RECEIVE_VOTE:
            console.log("this is from reducer fo receive vote ", action.vote)
            console.log("this is from reducer state ", state)

            const { qid, answer, authedUser } = action.vote;

            const updatedQuestions = {
                    ...state.questions,
                    [qid]: {
                        ...state.questions[qid],
                        [answer]: {
                            ...state.questions[qid][answer],
                            votes:state.questions[qid][answer].votes.concat([authedUser])
                        }
                    }
                }

            console.log("updated question", updatedQuestions)
            return {
                ...state,
                questions: updatedQuestions
            }

        default:
            return state;

        }

    }




// selectedOption,
// question.id,
// authenticatedUser

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


// const updatedQuestions = {
//     ...questions,
//     [qid]: {
//         ...questions[qid],
//         [answer]: {
//             ...questions[qid][answer],
//             votes:questions[qid][answer].votes.concat([authedUser])
//         }
//     }
// }