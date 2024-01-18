import React, { Component }  from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import NavBar from './components/NavBar';
import CreatePoll from './components/CreatePoll';
import Login from './components/Login';
import UnansweredListing from './components/UnansweredListing';
// import UnansweredPage from './components/UnansweredPage'
// import AnsweredPage from './components/AnsweredPage'
import Answered from './components/Answered';
import { handleInitialData } from './actions/shared';
import PageNotFoundError from './components/PageNotFoundError';
import Question from './components/Question';


class App extends React.Component{

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authenticatedUser } = this.props

    return (
      <div className="App">
        <NavBar />
          <Routes>
          <Route exact path="/" element={<Login />} />
            <Route path="/home/" element={<Home />} >
              <Route index element={authenticatedUser ? <UnansweredListing/> : <Navigate to="/" />} />
              <Route path="unansweredListing" element={authenticatedUser ? <UnansweredListing /> : <Navigate to="/" />} />
              <Route path="answered" element={authenticatedUser ? <Answered /> : <Navigate to="/" />} />
            </Route>
            <Route path="/questions/:id" element={<Question />} />
            <Route path="/leaderboard" element={authenticatedUser? <Leaderboard />: <Navigate to="/" />} />
            <Route path="/add" element={authenticatedUser ? <CreatePoll /> : <Navigate to="/" />} />
            <Route path="/error" element ={<PageNotFoundError />} />
            {/* <Route path="*" element ={<PageNotFoundError />} /> */}
          </Routes>
      </div>
    );
  }
}

function mapStateToProps ({authenticatedUser}) {
  return { authenticatedUser }
}

export default connect(mapStateToProps)(App);

