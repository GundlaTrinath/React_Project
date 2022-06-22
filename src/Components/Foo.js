import React, { Component } from 'react';
import './Card.css';
import "bootstrap-icons/font/bootstrap-icons.css"

const Foo = () => {
    const details = [
        {
            Name: "Trinath",
            Photo: "/Images/IMG_0059-02-012.jpg",
            Start_date: "10 / 10 / 2022",
            End_date: "10 / 10 / 2022",
            Role: "software intern",
        },
        {
            Name: "Trinath",
            Photo: "/Images/IMG_0059-02-012.jpg",
            Start_date: "10 / 10 / 2022",
            End_date: "10 / 10 / 2022",
            Role: "software intern",
        },
        {
            Name: "Trinath",
            Photo: "/Images/IMG_0059-02-012.jpg",
            Start_date: "10 / 10 / 2022",
            End_date: "10 / 10 / 2022",
            Role: "software intern",
        },
        {
            Name: "Trinath",
            Photo: "/Images/IMG_0059-02-012.jpg",
            Start_date: "10 / 10 / 2022",
            End_date: "10 / 10 / 2022",
            Role: "software intern",
        },
        {
            Name: "Trinath",
            Photo: "/Images/IMG_0059-02-012.jpg",
            Start_date: "10 / 10 / 2022",
            End_date: "10 / 10 / 2022",
            Role: "software intern",
        },
        {
            Name: "Trinath",
            Photo: "/Images/IMG_0059-02-012.jpg",
            Start_date: "10 / 10 / 2022",
            End_date: "10 / 10 / 2022",
            Role: "software intern",
        },
    ];

    const Cards = (card, index) => {
        return (
            <div className="col-md-4 col-lg-3 col-sm-6">
                <div className="card">
                    <div className="image">
                        <img src={card.Photo} alt="Profile" />
                    </div>
                    <div className="main-text">
                        <h2>{card.Name}</h2>
                        <p className="text-secondary">{card.Start_date}</p>
                        <p className="text-secondary">{card.End_date}</p>
                        <p className="text-secondary">{card.Role}</p>
                    </div>
                    <div className="socials">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                </div>
            </div>
        );
    };

    return <div className='row'>{details.map(Cards)}</div>;

};
export default Foo;