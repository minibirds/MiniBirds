import React, { Component } from 'react';
import './MainTweet.css';
import ProfileImg from '../img/profile-img-default.png';
import Gallery from '../img/gallery.png';
import axios from 'axios';
import base_url from '../../base_url';

class MainTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      content: '',
      img: '',
      created_At: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  PostTwitContent = () => {
    const { userId, content, img, created_At } = this.state;
    axios({
      method: 'post',
      url: `${base_url}/twit`,
      data: {
        userId: userId,
        content: content,
        img: img,
        created_At: created_At
      }
    })
    .then((res) => {
      console.log(1);
      console.log(res);
      console.log(res.data);
    })
    .catch((err) =>{
      console.log(err);
      console.log('error');
    })
  }

  render() { 
    const { handleChange } = this;
    return ( 
      <div className="tweet">

        <div className="tweet-header">
          <img className="tweet-profile-img" src={ProfileImg} alt="profile_img" />
          <textarea onChange={handleChange} className="text-tweet" placeholder="무슨 일이 일어나고 있나요?"></textarea>
        </div>
          
        <div className="tweet-footer">
          <img className="btn-gallery" src={Gallery} alt="gallery"></img>
          <input type="file" accept="image/*" />
          <input className="btn-tweet" type="button" value="트윗하기" onClick={() => window.location.reload()}/>
        </div>
      </div>
     );
  }
}
 
export default MainTweet;