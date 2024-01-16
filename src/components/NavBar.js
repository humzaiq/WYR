import React from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { handleUserLogout } from '../actions/shared';

function NavBar(props) {
        const authedUser =  props.authenticatedUser;
        const users = props.users
        const usersName = (authedUser && users[authedUser]) ?
                          users[authedUser].name
                          : '';

        const usersAvatar = (authedUser && users[authedUser]) ?
                            users[authedUser].avatarURL
                            : '';


        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleLogout = (userId) => {
            dispatch(handleUserLogout(userId));
            navigate('/');
        }

        return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <NavLink to="/home/">
                                <div className="navbar-brand" href="#">Rather</div>
                                <button
                                    className="navbar-toggler"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </NavLink>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to="/leaderboard">
                                        <div className="nav-link">Leaderboard</div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/add">
                                        <div className="nav-link">Create Poll</div>
                                        </NavLink>
                                    </li>
                                </ul>
                                    {authedUser == null ? (
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to="/">
                                                    <div className="nav-link">Login</div>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    ) : (
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item navbar-avatar-block">
                                            <img className="navbar-avatar" src={usersAvatar.slice(1)} />
                                            <div className="nav-link">Welcome, {usersName}</div>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className="nav-link"
                                                onClick={() => handleLogout(authedUser)}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                 )}
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }

  function mapStateToProps({ users, authenticatedUser }) {
        return { users, authenticatedUser }
  }

  export default connect(mapStateToProps)(NavBar);