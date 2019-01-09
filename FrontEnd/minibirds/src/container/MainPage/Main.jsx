import React, { Component } from 'react';
import Introduction from '../../Components/Main/Introduction';
import MainTweet from '../../Components/Main/MainTweet';
import MiniProfile from '../../Components/Main/MiniProfile';
import MainTwitList from '../MainTwitList/MainTwitList';
import axios from 'axios';
import base_url from '../../base_url';
import './Main.css';

class Main extends Component {

  constructor(props) {
    super(props);
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
    const {id, nickname} = this.props;
    return(
      <div className='main-page'>
        <MiniProfile id={id} nickname={nickname}/>
        <div className="main-middle">
          <MainTweet />
          <MainTwitList />
        </div>
        <Introduction/>
      </div>
    );
  }
}

export default Main;