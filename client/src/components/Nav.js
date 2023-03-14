import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import Auth from '../utils/auth';


function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="Kesiah's Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon background-orange"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                
         {/*This is where the COnditional was added for the Nav*/}
                    {Auth.loggedIn() ? (
                <>
                <Link to="/" className="link-text bold-text add-padding main-link">Home</Link>
                  <Link to="/queue" className="link-text bold-text add-padding main-link">Collections</Link>
                  <Link onClick={Auth.logout}className="link-text bold-text add-padding main-link">Logout</Link>
                </>
              ) : (
                  <>
                <Link to="/" className="link-text bold-text add-padding main-link">Home</Link>
                <Link to="/login" className="link-text bold-text add-padding main-link">Log in</Link>
                </>
              )}
                </ul>
            </div>
            
        </div>
    </nav>
    )
}

export default Nav