import React  from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link, useLocation, useNavigate, withRouter, useParams, NavLink} from "react-router-dom"


function AnsweredPage(props) {

     const { id } = useParams()
     const { questions } = props;
    //  console.log("props -- ", questions )
     const question = questions[id];
    //   console.log("question -- ", question)

     const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    // console.log(totalVotes, "totalVotes")
    // console.log(optionOnePercentage, "optionOnePercentage")

     const optionOnePercentage = question.optionOne.votes.length / totalVotes * 100

     const optionTwoPercentage = question.optionTwo.votes.length / totalVotes * 100
    //  console.log(optionTwoPercentage, "optionTwoPercentage")
    // console.log({width:`${optionTwoPercentage}%`}, "`${optionTwoPercentage}%`")

    return (
            <>
                <div className='unanswered-container col-8 mx-auto justify-content-center'>
                    <div className= "card unanswered-card p-3">
                        <div className='unanswered-card-top'>
                            <div className ="unanswered-card-top-image">
                                <img className="mx-auto d-block" src={require('../assets/john.jpeg')} />
                                <p>{question.author}</p>
                            </div>
                            <div className ="unanswered-card-top-title fs-3" >
                                Would you rather?
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <div className="answered-option-selection">
                                <div className="selected-option ">
                                    <div className="percentage-opt1" style={{width:`${optionOnePercentage}%`}}></div>
                                    <div className="option-text"><span className="fw-bolder p-3">{optionOnePercentage}% voted:</span><span>{question.optionOne.text}</span></div>
                                </div>
                            </div>
                            <div className="answered-option-selection">
                                <div className="selected-option">
                                    <div className="percentage-opt1" style={{width:`${optionTwoPercentage}%`}}></div>
                                    <div className="option-text"><span className="fw-bolder p-3">{optionTwoPercentage}% voted:</span><span>{question.optionTwo.text}</span>
                                    <span className="badge rounded-pill bg-info ms-2">Your answer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}


function mapStateToProps ({questions}) {
    console.log('questions from map function ', questions )
    return { questions }
}

export default connect(mapStateToProps)(AnsweredPage);


// const mapStateToProps = ({ authedUser, tweets, users }, props) => {
//     const { id } = props.router.params;

//     return {
//       id,
//       replies: !tweets[id]
//         ? []
//         : tweets[id].replies.sort(
//             (a, b) => tweets[b].timestamp - tweets[a].timestamp
//           ),
//     };
//   };