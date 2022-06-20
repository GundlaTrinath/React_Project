import React from "react";
import './Card.css';
import "bootstrap-icons/font/bootstrap-icons.css"

function Card() {
    return (
        <div className="profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <div className="image">
                                <img src="/Images/IMG_0059-02-012.jpg" alt="Profile" />
                            </div>
                            <div className="main-text">
                                <h2>Trinath Gundla</h2>
                                <p className="text-secondary">Front end developer</p>
                            </div>
                            <div className="socials">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-linkedin"></i></a>
                                <a href="#"><i class="bi bi-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <div className="img">
                                <img src="..." alt="Profile" />
                            </div>
                            <div className="main-text">
                                <h2>Jone Doe</h2>
                                <p className="text-secondary">Front end developer</p>
                            </div>
                            <div className="socials">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <div className="img">
                                <img src="..." alt="Profile" />
                            </div>
                            <div className="main-text">
                                <h2>Sara Maria</h2>
                                <p className="text-secondary">Front end developer</p>
                            </div>
                            <div className="socials">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-linkedin"></i></a>
                                <a href="#"><i class="bi bi-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <div className="img">
                                <img src="..." alt="Profile" />
                            </div>
                            <div className="main-text">
                                <h2>Keshav Singh</h2>
                                <p className="text-secondary">Front end developer</p>
                            </div>
                            <div className="socials">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-linkedin"></i></a>
                                <a href="#"><i class="bi bi-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card