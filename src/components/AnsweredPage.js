import React  from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link, useLocation, useNavigate, withRouter, useParams, NavLink} from "react-router-dom"


function AnsweredPage(props) {

     const { id } = useParams()
     const { questions, users, authenticatedUser } = props;

     const question = questions[id];
     const author = users[question.author];

     if (!question) {
        navigate('/error');
        return null;
    }

     const checkVoteOptionOne = question.optionOne.votes.includes(authenticatedUser) ?
                    <span className="badge rounded-pill bg-info ms-2">Your answer</span> :
                    null;

     const checkVoteOptionTwo = question.optionTwo.votes.includes(authenticatedUser) ?
                    <span className="badge rounded-pill bg-info ms-2">Your answer</span> :
                    null;


     const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
     const optionOnePercentage = totalVotes === 0 ? 0
                                : (question.optionOne.votes.length / totalVotes * 100).toFixed(0)

     const optionTwoPercentage = totalVotes === 0 ? 0
                                : (question.optionTwo.votes.length / totalVotes * 100).toFixed(0)

    return (
            <>
                <div className='unanswered-container col-8 mx-auto justify-content-center'>
                    <div className= "card unanswered-card p-3">
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
                </div>
            </>
        );
}


function mapStateToProps ({questions, users, authenticatedUser}) {
    return { questions, users, authenticatedUser }
}

export default connect(mapStateToProps)(AnsweredPage);