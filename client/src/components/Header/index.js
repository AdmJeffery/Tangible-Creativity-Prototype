import React from "react";
import "./style.css";

export default function HeaderNav() {

    return (
        
        <div>
            <nav className="navbar   navbar-expand-lg navbar-dark ">
                <a className="navbar-brand " href="/home"><img src= "./pictures/TangibleCurvedColor.png" alt="logo" width="75%" height ="auto"/></a>

                    <button className="navbar-toggler ml" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href ="/calendar">CLASSES</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">ABOUT</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/signup">NEWSLETTER</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}
