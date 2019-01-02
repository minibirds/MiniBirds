import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-dom';
import SignPage from '../../Components/Share/SignPage';
import { Signin, Signlogo, Signup } from '../../Components/signup_in';
import * as service from '../../service/get.js';

class SignMain extends Component {

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = async () => {
        const userInfo = await service.getSignin(snsID, password);
        console.log(userInfo);
    }

    render() {
        return(
            <div className="Sign-main">
                <BrowserRouter>
                    <React.Fragment>
                        <SignPage left={<Signlogo />} right={
                            <Switch>
                                <Route exact path='/Signin' Component={Signin} />
                                <Route exact path='/Signup' Component={Signup} />
                            </Switch>
                        }/>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default SignMain;