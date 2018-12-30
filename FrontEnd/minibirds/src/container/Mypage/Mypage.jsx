import React, { Component } from 'react';
import Profile from '../../Components/profile';
import TabBar from '../../Components/Tapba';
import TwitList from '../../Components/Main/Twitlist';
import './Mypage.css';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="mypage-container">
        <Profile/>
        <TabBar/>
        <TwitList/>
      </div>
     );
  }
}
 
export default Mypage;