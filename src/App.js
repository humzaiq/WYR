import React, { Component }  from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import NavBar from './components/NavBar';
import CreatePoll from './components/CreatePoll';
import Login from './components/Login';
import UnansweredListing from './components/UnansweredListing';
import UnansweredPage from './components/UnansweredPage'
import AnsweredPage from './components/AnsweredPage'
import Answered from './components/Answered';
import { handleInitialData } from './actions/shared';

class App extends Component{

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/home/" element={<Home />} >
              <Route index element={<UnansweredListing />} />
              <Route path="unansweredListing" element={<UnansweredListing />} />
              <Route path="answered" element={<Answered />} />
            </Route>
            <Route path="/unansweredPage/:id" element={<UnansweredPage />} />
            <Route path="/AnsweredPage/:id" element={<AnsweredPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/createpoll" element={<CreatePoll />} />
        </Routes>
      </div>
    );
  }
}

export default connect()(App);