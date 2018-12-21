import React, { Component } from 'react';
import './MainTweet.css'
import Logo from '../img/MiniBirds-Logo.png'
import Gallery from '../img/gallery.png'

class MainTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="tweet">
        <div className="tweet-header">
          <img className="tweet-profile-img" src={Logo} alt="profile_img"/>
          <textarea className="text-tweet" placeholder="무슨 일이 일어나고 있나요?"></textarea>
        </div>
        <div className="tweet-footer">
          <img className="btn-gallery" src={Gallery} alt="gallery"></img>
          <input className="btn-tweet" type="button" value="트윗하기"/>
        </div>
        
      </div>
     );
  }
}
 
export default MainTweet;