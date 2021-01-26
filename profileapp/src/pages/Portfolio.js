import React from "react";

const Portfolio = () => {
    return (

        <main className="container">
            <section className="row">
                <div className="jumbotron col-sm-10">
                    <h1 className="display-4">Portfolio</h1>
                    <hr className="my-4" />
                    <div className="card h-100 text-center">
                        <div className="card-header portfolio-card">
                            LOOK & LAUGH
              </div>
                        <img src="../images/project-one-closeup.png" className="card-img-top" id="lookLaugh"
                            alt="screenshot of Look & Laugh page: a teal background with search bar for an image or joke, a placeholder image of a winky face sticking its tongue out, and a place to save images & jokes to favorites"></img>
                        <div className="card-body">
                            <h5 className="card-title">Breaks for Coders</h5>
                            <p className="card-text">
                                Returns a giphy image & joke for a user's searched term with an option to save favorites <br />
                                <br /><a href="https://theoriginalison.github.io/look-laugh/" target="_blank">Deployed Site:<br />
                    https://theoriginalison.github.io/look-laugh/</a><br />
                                <a href="https://github.com/theoriginalison/look-laugh" target="_blank">GitHub Repo:<br />
                    https://github.com/theoriginalison/look-laugh</a><br />
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default Portfolio;