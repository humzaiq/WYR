import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import { connect } from 'react-redux';

function PageNotFoundError() {
    return (
        <div className= "container">
            <div className= "login-container  d-flex justify-content-center">
               <h1>404: Page Not Found</h1>
            </div>
        </div>
    );
}

export default PageNotFoundError;