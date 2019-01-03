import React from 'react';
import './SignPage.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from '../signup_in/Signin';
import Signlogo from '../signup_in/Signlogo';

const SigninPage = () => {
    return (
        <div className="background-box">
            <div className="sign-container">
                <div className="left-component">
                    <Signlogo />
                </div>
                <div className="right-component">
                    <Signin />
                </div>       
            </div> 
        </div>
    );
}

export default SigninPage;
