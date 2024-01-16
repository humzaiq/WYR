import React, { useEffect} from 'react';
import { NavLink, Outlet, useParams, useNavigate, useLocation } from "react-router-dom"

function Home() {

    const location = useLocation();
    const classActive = location.pathname === "/home/" ? 'active' : ''

  return (
    <div className="container">
        <div className="home-container d-flex justify-content-center">
            <div className="card col-md-9">
                <h1> Enter unanswered polls</h1>
                <ul className="nav nav-pills p-4">
                    <li className="nav-item">
                        <NavLink
                            to="unansweredListing"
                            className={`nav-link ${classActive}`}
                            >
                            <div>Unanswered</div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="answered"
                            className="nav-link"
                            >
                            <div>Answered</div>
                        </NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    </div>
  );
}

export default Home;
