import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">DashType</p>
            </div>
            <div className="nav-right">
                {/* <a
                    target="_blank"
                    className="nav-aam-link"
                    href=""
                    rel="noreferrer"
                >
                    Github
                </a> */}
            </div>
        </div>
    );
};

export default Nav;
