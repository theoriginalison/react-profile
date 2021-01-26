import React from "react";
//only imported into App.js (one time!!)

function Nav() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="./index.html">Alison Lubar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link navRight" href="./contact.html">Contact</a>
                        <a className="nav-link navRight" href="./portfolio.html">Portfolio</a><a className="nav-link navRight"
                            href="./index.html">About <span className="sr-only">(current)</span></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;