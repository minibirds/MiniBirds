import React, { Component } from 'react';
import Profile from '../../Components/mypage/Profile';
import TabBar from '../../Components/mypage/Tapba';
import TwitList from '../../Components/Share/Twitlist';
import FollowList from '../../Components/mypage/Followlist';
import './Mypage.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="mypage-container">
        <BrowserRouter>
          <React.Fragment>
            <Profile/>
            <TabBar/>
            <Switch>
              <Route path='/twitlist' component={TwitList} exact />
              <Route path='/followlist' component={FollowList} exact />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
     );
  }
}
 
export default Mypage;