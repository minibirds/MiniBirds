import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-dom';
import SignPage from '../../Components/Share/SignPage';
import { Signin, Signlogo, Signup } from '../../Components/signup_in';
import * as service from '../../service/post.js';

class SignMain extends Component {

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = async () => {
        const userInfo = await service.getSignin(snnID, password);
    }

    render() {
        return(
            <div className="Sign-main">
                <SignPage left={<Signlogo />}/>
            </div>
        );
    }
}

export default SignMain;