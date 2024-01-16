import React from 'react'
import { connect } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom"


class Leaderboard extends React.Component {
    render() {
        const { users } = this.props;

        return (
        <div className="container">
            <div className="leaderboard-container d-flex justify-content-center">
                <div className="poll-card card col-md-10">
                    <div className="poll-left-section">
                        <h1>Top users</h1>
                    </div>
                    {users.map( (user,i) => {
                        const currentItemNumber = i + 1;

                        return (
                            <div key={user.id} className= "card leaderboard-card p-3">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img className="leaderboard-avatar mx-auto d-block" src={user.avatarURL.slice(1)} />
                                        <p className='text-center fs-2'> Rank# {currentItemNumber}</p>
                                    </div>
                                    <div className="col-md-7">
                                        <div>
                                            <p className='fs-2 leader-name'>{user.name}</p>
                                        </div>
                                        <div className="row">
                                            <div>
                                                <p className=' opacity-50 col-md-6'> Questions answered</p>
                                                <p className='text-start fs-2'> {Object.keys(user.answers).length}</p>
                                            </div>
                                            <div>
                                                <p className='text-start opacity-50 col-md-6'> Questions asked</p>
                                                <p className='text-start fs-2'> {user.questions.length}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      )
    }
  }

function mapStateToProps ({users}) {
    const sortedUsers = Object.values(users).sort((a, b) => {
        const contributionsA = a.questions.length + Object.keys(a.answers).length;
        const contributionsB = b.questions.length + Object.keys(b.answers).length;
        return contributionsB - contributionsA;
      });

      return { users: sortedUsers };
}

export default connect(mapStateToProps)(Leaderboard);