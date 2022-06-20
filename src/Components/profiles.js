import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";


function Profile() {
    return (
        <div className="container-fluid d-flex justify-content-center mb-2">
            <div className="row">
                <div className="col-sm-4">
                    <Card name={"Trinath Gundla"} img="/Images/IMG_0059-02-012.jpg" date='20-06-2022' profession='Front end developer'/>
                </div>
                <div className="col-sm-4">
                    <Card name={"Mario"} img="..." date="20-07-2022" profession="Backend developer" />
                </div>
                <div className="col-sm-4">
                    <Card name={"Jone"} img="..." date="10-07-2022" profession="Full stack developer"/>
                </div>
            </div>
        </div>
    );
}

export default Profile