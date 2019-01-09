import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Profile from '../../Components/mypage/Profile';
import TabBar from '../../Components/mypage/Tapba';
import MyTwitList from '../MyTwitList/MyTwitList';
import FollowList from '../../Components/mypage/Followlist';
import './Mypage.css';
import Header from '../../Components/Share/Header';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listClassName : '',
     }
  }

  componentDidMount(){
    this.CheckToken();
  }

  CheckToken = () => {
    const {history} = this.props;
    if(localStorage.getItem('token') === ''){
        history.push('/signin');
    }
  }

  render() { 
    const { history, location } = this.props;
    return ( 
      <div className="mypage-container">

        <Header/>
        <Profile/>
        <TabBar history={history} />
        <div className="mypage-twit-list" id="mypage-selected-list">
          {location.pathname === '/mypage/twitlist' ? 
          <MyTwitList /> : location.pathname === '/mypage/following' ? <FollowList/> : <FollowList/>}
        </div>
      </div>
     );
  }
}
 
export default withRouter(Mypage);