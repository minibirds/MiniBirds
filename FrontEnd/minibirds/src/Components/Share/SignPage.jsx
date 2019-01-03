import React from 'react';
import './SignPage.css';
import {BrowserRouter, Route, Switch } from 'react-dom';
import Signin from '../signup_in/Signin';
import Signlogo from '../signup_in/Signlogo';
import Signup from '../signup_in/Signup';
import Edit from '../Edit/Edit';
import Editimg from '../Edit/Editimg';

const SignPage = () => {

    return (
            <div className="background-box">
                <div className="sign-container">
                    <BrowserRouter>
                        <React.Fragment>
                            <div className="left-component">
                                <Switch>
                                    <Route exact path='/edit' component={Editimg} />
                                    <Route exact path='/signin' component={Signlogo}/>
                                    <Route exact path='/signup' component={Signlogo} />
                                </Switch>
                            </div>
                            <div className="right-component">
                                <Switch>
                                    <Route exact path='/siginin' component={Signin} />
                                    <Route exact path='/signup' component={Signup} />
                                    <Route exact path='/edit' component={Edit} />
                                </Switch>
                            </div>           
                        </React.Fragment>
                    </BrowserRouter>
                </div>
            </div>
    );
}

export default SignPage;