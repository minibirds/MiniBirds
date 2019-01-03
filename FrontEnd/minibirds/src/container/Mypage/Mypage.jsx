import React, { Component } from 'react';
import Profile from '../../Components/mypage/Profile';
import TabBar from '../../Components/mypage/Tapba';
import TwitList from '../../Components/Share/Twitlist';
import FollowList from '../../Components/mypage/Followlist';
import './Mypage.css';
import Header from '../../Components/Share/Header';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="mypage-container">
        <Header/>
        <Profile/>
        <TabBar/>
        <div className="mypage-selected-list">
          <TwitList/>
        </div>
      </div>
     );
  }
}
 
export default Mypage;