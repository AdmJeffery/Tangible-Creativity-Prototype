import React from "react";
import "./style.css";

export default function HeaderNav() {
    return (
        <div>
            <nav class="navbar   navbar-expand-lg navbar-blue bg-white">
                <a class="navbar-brand " href="/home">Tangible Creativity</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                            <li class="nav-item active">
                                <a class="nav-link" href="/home">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href ="/calendar">CLASSES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}