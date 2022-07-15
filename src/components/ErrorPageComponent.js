import {Link, useNavigate, useParams} from "react-router-dom";
import React, {Component, useEffect, useState} from 'react';

function ErrorPageComponent(props) {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return (
        <div className="container-fluid">
            <div className="text-success">4</div>
            <div className="text-success">0</div>
            <div className="text-success">4</div>
            <div className="text-warning">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
                first place?<p>Let's go <Link to="/"> Home </Link> and try from there.</p></div>
        </div>
    );
}

export default ErrorPageComponent;