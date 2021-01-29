import React, { useState } from "react";
import projects from "../data/projects";
import Card from "../components/Card"
//import card here and then use it on line 16

const Portfolio = () => {



    return (

        <main className="container">
            <section className="row">
                <div className="jumbotron col-sm-10">
                    <h1 className="display-4">PORTFOLIO</h1>
                    <hr className="my-4" />
                    {projects.map((project, index) => {
                        return <Card {...project} key={index} />
                    })}
                </div>
            </section >
        </main >
    )
}

export default Portfolio;