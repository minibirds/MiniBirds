import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Profile from '../../Components/mypage/Profile';
import TabBar from '../../Components/mypage/Tapba';
import TwitList from '../../Components/Share/Twitlist';
import FollowList from '../../Components/mypage/Followlist';
import './Mypage.css';
import Header from '../../Components/Share/Header';

const ChangeListComponents = () => {
  const selectedList = document.getElementById('mypage-selected-list');
  if(selectedList.className === 'mypage-twitlist') ;
}

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listClassName : '',
     }
  }
  render() { 
    const { listClassName } = this.state;
    const { history, location } = this.props;
    return ( 
      <div className="mypage-container">

        <Header/>
        <Profile/>
        <TabBar history={history} />
        <div className="mypage-twit-list" id="mypage-selected-list">
          {location.pathname === '/mypage/twitlist' ? 
          <TwitList /> : location.pathname === '/mypage/following' ? <FollowList/> : '팔로워'}
        </div>
      </div>
     );
  }
}
 
export default withRouter(Mypage);