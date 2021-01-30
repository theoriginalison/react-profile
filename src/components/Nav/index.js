import React from "react";
import { Link } from "react-router-dom";
//only imported into App.js (one time!!)

function Nav() {

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">ALISON LUBAR</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link navRight" to="/contact">CONTACT</Link>
                    <Link className="nav-link navRight" to="/portfolio">PORTFOLIO</Link><Link className="nav-link navRight"
                        to="/">ABOUT</Link>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav;