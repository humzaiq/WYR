import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { handleVoteSubmission } from '../actions/shared'
import  AnsweredPage from './AnsweredPage'

function UnansweredPage(props) {
        const [selectedOption, setSelectedOption] = useState('');

        const { id } = useParams();
        const navigate = useNavigate();
        const {
            questions,
            users,
            authenticatedUser,
            dispatch } = props;

        const question = questions[id]

        if (!question) {
            navigate('/error');
            return null;
        }

        const author = users[question.author] || {} ;

        const handleChange = (e) => {
            setSelectedOption(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();

        const vote = {
            authedUser: authenticatedUser,
            answer: selectedOption,
            qid: question.id,
        }

            try {
                dispatch(handleVoteSubmission(vote));

            } catch (error) {
                // navigate(`/AnsweredPage/${question.id}`)
            }
        }

        return (
            <>
            <div className='unanswered-container col-8 mx-auto justify-content-center'>
                <div className= "card unanswered-card p-3">
                    <div className= 'unanswered-card-top'>
                        <div className= "unanswered-card-top-image">
                            <img className= "mx-auto d-block" src={author.avatarURL.slice(1)} />
                            <p>{author.name}</p>
                        </div>
                        <div className= "unanswered-card-top-title fs-3" >
                            Would you rather?
                        </div>
                    </div>
                    <div className= "d-grid gap-2">
                        <form onSubmit={handleSubmit}>
                            <div className= "card unanswered-option-selection p-3">
                                <div>
                                    <input
                                        className= "form-check-input unanswered-option-selection-radio"
                                        type="radio"
                                        value= "optionOne"
                                        onChange={handleChange}
                                        name={`options-${question.id}`}
                                        id={`optionOne-${question.id}`}
                                        />
                                    <span className='ps-3'>{question.optionOne.text}</span>
                                </div>

                            </div>
                            <div className="card unanswered-option-selection p-3">
                                <div>
                                    <input
                                        className= "form-check-input unanswered-option-selection-radio"
                                        type="radio"
                                        value= "optionTwo"
                                        onChange={handleChange}
                                        name={`options-${question.id}`}
                                        id={`optionTwo-${question.id}`} />
                                    <span className= 'ps-3'>{question.optionTwo.text}</span>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
        )
    }

  function mapStateToProps ({questions, users, authenticatedUser}, props) {
    return {
        questions,
        users,
        authenticatedUser}
}

export default connect(mapStateToProps)(UnansweredPage);