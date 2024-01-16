import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import { connect } from 'react-redux';
import { handleUserAuthentication } from '../actions/shared';

function Login(props) {

    const [userValue, setValue] = useState('');
    const navigate = useNavigate();
    const { dispatch, users } = props

    //Set value for selected user
    const handleOnChange = (e) => {
        e.preventDefault();
        return setValue(e.target.value)
    }

    //Authenticating user
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(handleUserAuthentication(userValue))
        navigate ('/home/UnansweredListing')
    }

    return (
        <div className= "container">
            <div className= "login-container  d-flex justify-content-center">
                <div className= "card col-md-9">
                    <div className= "card-body">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-start">Login here</h1>
                                <label className="pb-7 text-start">User you would like to log in as:</label>
                                    <select onChange={handleOnChange}
                                        className="form-select"
                                        value={userValue}
                                        aria-label="Default select example">
                                         <option value="" disabled>Select User</option>
                                            { users.filter(user => {
                                                return user.name !== null
                                                })
                                                .map(user => {
                                                    return <option key={user.id} value={user.id}>{user.name}</option>
                                                })
                                            }
                                    </select>
                            <div className="p-5 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps ({users}) {
    return { users: Object.values(users)};
}

export default connect(mapStateToProps)(Login);