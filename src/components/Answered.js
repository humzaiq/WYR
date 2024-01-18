import React  from 'react';
import { connect } from 'react-redux';


class Answered extends React.Component {

    render() {

    const { users, authenticatedUser } = this.props
    const answeredQuestions = Object.values(this.props.questions)
    const sortedQuestions = [...answeredQuestions].sort((a,b) => b.timestamp - a.timestamp);

    return (
            <>
                {sortedQuestions.map(question => {

                const author = users[question.author] ?? '';
                const checkVoteOptionOne = question.optionOne.votes.includes(authenticatedUser) ?
                        <span className="badge rounded-pill bg-info ms-2">Your answer</span> :
                        null;

                const checkVoteOptionTwo = question.optionTwo.votes.includes(authenticatedUser) ?
                        <span className="badge rounded-pill bg-info ms-2">Your answer</span> :
                        null;

                const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
                const optionOnePercentage = (question.optionOne.votes.length / totalVotes * 100).toFixed(0)
                const optionTwoPercentage = (question.optionTwo.votes.length / totalVotes * 100).toFixed(0)


                    return (
                            <div key = {question.id} className= "answered-container card unanswered-card p-3">
                                <div className='unanswered-card-top'>
                                    <div className ="unanswered-card-top-image">
                                        <img className="mx-auto d-block" src={author.avatarURL.slice(1)} />
                                        <p>{author.name}</p>
                                        <p>Total Votes:{totalVotes}</p>
                                    </div>
                                    <div className ="unanswered-card-top-title fs-3" >
                                        Would you rather?
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <div className="answered-option-selection">
                                        <div className="selected-option ">
                                            <div className="percentage-opt1" style={{width:`${optionOnePercentage}%`}}></div>
                                            <div className="option-text">
                                                <span className="fw-bolder p-3">{optionOnePercentage}% voted:</span>
                                                <span>{question.optionOne.text}</span>
                                                {checkVoteOptionOne}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="answered-option-selection">
                                        <div className="selected-option">
                                            <div className="percentage-opt1" style={{width:`${optionTwoPercentage}%`}}></div>
                                            <div className="option-text">
                                                <span className="fw-bolder p-3">{optionTwoPercentage}% voted:</span>
                                                <span>{question.optionTwo.text}</span>
                                                {checkVoteOptionTwo}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}


function mapStateToProps ({questions, users, authenticatedUser}) {

    function filterQuestionsByUser(questions, userToCheck) {
        return Object.fromEntries(
          Object.entries(questions).filter(([key, value]) => {
            return value.optionOne.votes.includes(userToCheck) ||
                   value.optionTwo.votes.includes(userToCheck)
          })
        );
      }

    const userToCheck = authenticatedUser;
    const filteredObject = filterQuestionsByUser(questions, userToCheck)

    return { questions: filteredObject,
             users,
             authenticatedUser
            }
}

export default connect(mapStateToProps)(Answered);
