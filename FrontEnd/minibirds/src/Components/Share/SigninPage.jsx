import React from 'react';
import '../signup_in/Signin.css'
import {Link} from 'react-router-dom';
import Signlogo from '../signup_in/Signlogo';
import Signin from '../signup_in/Signin';

const SigninPage = ({}) => {
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
