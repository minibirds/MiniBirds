import React, { Component } from 'react';
import Introduction from '../../Components/Main/Introduction';
import MainTweet from '../../Components/Main/MainTweet';
import MiniProfile from '../../Components/Main/MiniProfile';
import TwitList from '../../Components/Share/Twitlist';
import axios from 'axios';
import base_url from '../../base_url';
import './Main.css';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      postID: '',
      userID: '',
      content: '',
      img: '',
      created_At: ''
    }
  }

  componentDidMount() {
    this.GetTwitInfo();
  }

  GetTwitInfo = () => {
    axios.get(`${base_url}`)
    .then((response) => {
      this.setState({
        postID: response.data.postID,
        userID: response.data.userID,
        content: response.data.content,
        img: response.data.img,
        created_At: response.data.created_At
      });
    })
  }

  render() {
    return(
      <div className='main-page'>
        <MiniProfile/>
        <div className="main-middle">
          <MainTweet/>
          <TwitList/>
        </div>
        <Introduction/>
      </div>
    );
  }
}

export default Main;