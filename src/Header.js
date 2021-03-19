import './App.css';
import './reset.css';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <header class="container">
                <Router>
                    <div>
                        <ul>
                        <h1>Elmer Hernandez</h1>
                            <li>
                                <a href="#aboutMe">About</a>
                            </li>
                            <li>
                                <a href="#workPage">Work</a>
                            </li>
                            <li>
                                <a href="#contactPage">Contact Me</a>
                            </li>
                            <li>
                                <a href="#resumePage">Resume</a>
                            </li>
                        </ul>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default Header;
