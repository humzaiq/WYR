import React  from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link, NavLink } from "react-router-dom";
// import authenticatedUser from '../reducers/authentication';


class UnansweredListing extends React.Component {

    render() {

    let allQuestions = Object.values(this.props.questions);

    const sortedQuestions = [...allQuestions].sort((a,b) => a.timestamp - b.timestamp);

    console.log('sortedArray', sortedQuestions )

    console.log('allQuestions', allQuestions )


    const { users } = this.props

    return (
            <>
                {sortedQuestions.map(question => {

                const author = users[question.author] ?? '';

                    return (
                        <div key={question.id} className= "card unanswered-card p-3">
                            <div className= 'unanswered-card-top'>
                                <div className= "unanswered-card-top-image">
                                    <img className= "mx-auto d-block" src={`${author.avatarURL.slice(1)}`} />
                                    <p>{author.name}</p>
                                </div>
                                <div className= "unanswered-card-top-title fs-3" >
                                    Would you rather?
                                </div>
                            </div>
                            <div className= "d-grid gap-2">
                                <div className= "unanswered-option-selection p-3">
                                    <div>
                                        <span className='fs-5'>{question.optionOne.text}</span>
                                        <span className="vs-text ps-3 fs-3"> OR </span>
                                        <span className= 'fs-5 ps-3'>{question.optionTwo.text}</span>
                                    </div>
                                </div>
                                <Link to={`/UnansweredPage/${question.id}`}>
                                    <button type="submit" className="btn btn-primary">
                                        Answer it
                                    </button>
                                </Link>
                            </div>
                        </div>
                        )
                    }
                )}
            </>
        )
    }
}


function mapStateToProps ({questions, users, authenticatedUser}) {
    console.log('questions000',{questions, users, authenticatedUser} )

    function filterQuestionsByUser(questions, userToCheck) {
        return Object.fromEntries(
          Object.entries(questions).filter(([key, value]) =>
                !value.optionOne.votes.includes(userToCheck) &&
                !value.optionTwo.votes.includes(userToCheck)
                // value.author !== userToCheck
        ));
    }

    const userToCheck = authenticatedUser;
    const filteredObject = filterQuestionsByUser(questions, userToCheck)
    console.log('mapstatetoprops filter', filteredObject)

    return { questions: filteredObject,
             users,
             authenticatedUser }
}

export default connect(mapStateToProps)(UnansweredListing);
