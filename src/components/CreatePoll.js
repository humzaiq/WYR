import React, { useState } from 'react'
import { Routes, Route, Link, Form, useHistory, useNavigate, withRouter, useSearchParams } from "react-router-dom"
import { connect } from 'react-redux';
import { handleQuestionSubmission } from '../actions/shared';

function CreatePoll (props) {

    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');


    const navigate = useNavigate();

    const { dispatch } = props

    const clearState = () => {
        setOptionOne('');
        setOptionTwo('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleQuestionSubmission(
            optionOne,
            optionTwo,
            props.authenticatedUser));
            clearState();
            navigate('/home/unansweredListing')
    }

      return (
        <div className="container">
            <div className="createpoll-container d-flex justify-content-center">
                <div className="poll-card card col-md-9">
                    <div className="poll-left-section">
                        <h1> Add your question</h1>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-4 text-start">
                                <label htmlFor="exampleInputPassword1" className="form-label text-left">Enter Option 1</label>
                                <input
                                    onChange={e => setOptionOne(e.target.value)}
                                    value={optionOne}
                                    type="text"
                                    id="optionOneInput"
                                    className="form-control"/>
                            </div>
                            <div className="mb-4 text-start">
                                <label htmlFor="exampleInputPassword1" className="form-label text-left">Enter Option 2</label>
                                <input
                                    onChange={e => setOptionTwo(e.target.value)}
                                    value={optionTwo}
                                    id="optionTwoInput"
                                    type="text"
                                    className="form-control"/>
                            </div>
                            <div className="p-4 d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={optionOne === "" || optionTwo === ""}>
                                        Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      )
}

function mapStateToProps (authenticatedUser) {
    console.log("this is mapstatetoprops", authenticatedUser)
    return authenticatedUser ;
}

export default connect(mapStateToProps)(CreatePoll);
