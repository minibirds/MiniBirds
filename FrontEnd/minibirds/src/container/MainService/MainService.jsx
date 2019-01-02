import React from 'react';
import Main from '../Main/Main';
import Mypage from '../Mypage/Mypage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../../Components/Share/Header';

const MainService = ({}) => {
    return(
        <div className="main-service">
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' component={Main} exact />
                        <Route path='/mypage' component={Mypage} exact/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </div> 
    )
}

export default MainService;