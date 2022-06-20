import React from "react";

function Card(props) {
    console.log(props.name)
    return (
        <div className="card text-center rounded shadow ms-2 mt-2">
            <div className="overflow">
                <img src={props.img} alt="Profile" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text text-muted">
                    {props.date}
                </p>
                <p className="card-text text-muted">
                    {props.profession}
                </p>
            </div>
        </div>
    );
}

export default Card