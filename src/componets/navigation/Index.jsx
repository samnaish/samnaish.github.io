import React from "react"

export default function NavigationBar() {
    return (
        <ul className="nav-bar">
            <li className="nav-bar__link"><a className="nav__text" href="#splash">Me</a></li>
            <li className="nav-bar__link"><a className="nav__text" href="#about">About</a></li>
            <li className="nav-bar__link"><a className="nav__text" href="#projects">Projects</a></li>
            <li className="nav-bar__link"><a className="nav__text" href="#profiles">Profiles</a></li>
        </ul>
    )
}