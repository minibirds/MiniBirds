import React, { Component } from 'react';
import Main from '../MainPage/Main';
import Mypage from '../Mypage/Mypage';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Header from '../../Components/Share/Header';
import Twit from '../../Components/Main/MainTweet';

class MainService extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.CheckToken();
    }

    CheckToken = () => {
        const {history} = this.props;
        if(localStorage.getItem('token') === ''){
            history.push('/');
        }
        
    }

    render() { 
        const {history} = this.props;
        return(
            <div className="main-service">
                <BrowserRouter>
                    <React.Fragment>
                        <Header history={history} />
                        <Switch>
                            <Route path='/' component={Main} exact />
                            <Route path='/mypage' component={Mypage} exact/>
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </div> 
        )
    }
}

export default withRouter(MainService);