import React from 'react';
import './SignPage.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Signlogo from '../signup_in/Signlogo';
import Signup from '../signup_in/Signup';

const SignupPage = () => {
    return (
        <div className="background-box">
            <div className="sign-container">
                <div className="left-component">
                    <Signlogo />
                </div>
                <div className="right-component">
                    <Signup />
                </div>       
            </div> 
        </div>
    );
}

export default SignupPage;
