import React from "react";

//this is where the props will be passed down to each project
function Card(props) {
    return (

        <div className="card h-100 text-center">
            <div className="card-header portfolio-card">
                {props.projectTitle}
            </div>
            <img src={props.projectImage} className="card-img-top"
                alt={props.projectImageAlt}></img>
            <div className="card-body">
                <h5 className="card-title">{props.projectTagline}</h5>
                <p className="card-text">{props.projectDescription}<br />
                    <br /><a href="https://theoriginalison.github.io/look-laugh/" target="_blank">Deployed Site:<br />
                        {props.deployedSite}</a><br />
                    <a href="https://github.com/theoriginalison/look-laugh" target="_blank">GitHub Repo:<br />
                        {props.githubRepo}</a><br />
                </p>
            </div>
        </div>

    )
}

export default Card;