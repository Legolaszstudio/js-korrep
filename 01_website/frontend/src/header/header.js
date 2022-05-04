import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark main-module mb-3">
                <a className="navbar-brand my-1 ms-3 me-2" href="/">Korrep</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    &#9776;
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pontok</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Legolaszstudio/js-korrep/">Feldatok</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}