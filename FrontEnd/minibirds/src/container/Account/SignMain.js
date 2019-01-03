import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-dom';
import SignPage from '../../Components/Share/SignPage';
import Signin from '../../Components/signup_in/Signin';
import Signlogo from '../../Components/signup_in/Signlogo';
import Signup from '../../Components/signup_in/Signup';
import Edit from '../../Components/Edit/Edit';
import Editimg from '../../Components/Edit/Editimg';

class SignMain extends Component {

    componentDidMount() {
        this.getUserInfo();
    }

  /*  getUserInfo = async () => {
        const userInfo = await service.getSignin(snsID, password);
        console.log(userInfo);
    }*/

    render() {
        return(
            <div className="Sign-main">
                <BrowserRouter>
                    <React.Fragment>
                        <SignPage left={
                            <Switch>
                                <Route exact path='/edit' component={Editimg} />
                                <Route exact path='/signin' component={Signlogo}/>
                                <Route exact path='/signup' component={Signlogo} />
                            </Switch>
                        } right={
                            <Switch>
                                <Route exact path='/signin' component={Signin} />
                                <Route exact path='/signup' component={Signup} />
                                <Route exact path='/edit' component={Edit} />
                            </Switch>
                        }/>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default SignMain;