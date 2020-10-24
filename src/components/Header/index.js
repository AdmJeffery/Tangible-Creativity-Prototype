import React from "react";
import "./style.css";

export default function HeaderNav() {
    return (
        <div>
            <nav className="navbar   navbar-expand-lg navbar-blue ">
                <a className="navbar-brand " href="/home"><img src= "./pictures/TangibleCurvedColor.png" width="75%" height ="auto"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href ="/calendar">CLASSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}
