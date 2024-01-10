import React from 'react'
import { Routes, Route, Link, Form, useHistory } from "react-router-dom"
import { connect } from 'react-redux';
import { handleQuestionSubmission } from '../actions/shared';

class CreatePoll extends React.Component {

 state = {
    optionOne: '',
    optionTwo: '',
 }

 render() {

    const { dispatch } = this.props
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleQuestionSubmission(
            this.state.optionOne,
            this.state.optionTwo,
            this.props.authenticatedUser))
            clearState();
            // this.props.navigate('/home/unansweredListing');
    }

   const clearState = () => {
        this.setState({
            optionOne: '',
            optionTwo: '',
        });
      };

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
                                    onChange={e => this.setState({optionOne: e.target.value})}
                                    value={this.state.optionOne}
                                    type="text"
                                    className="form-control"/>
                            </div>
                            <div className="mb-4 text-start">
                                <label htmlFor="exampleInputPassword1" className="form-label text-left">Enter Option 2</label>
                                <input
                                    onChange={e => this.setState({optionTwo: e.target.value})}
                                    value={this.state.optionTwo}
                                    type="text"
                                    className="form-control"/>
                            </div>
                            <div className="p-4 d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        onClick={this.clearState}
                                        className="btn btn-primary"
                                        // onClick={onNavigate}
                                        disabled={this.state.optionOne === "" || this.state.optionTwo === ""}>
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
  }


function mapStateToProps (authenticatedUser) {
    console.log("this is mapstatetoprops", authenticatedUser)
    return authenticatedUser ;
}

export default connect(mapStateToProps)(CreatePoll);


