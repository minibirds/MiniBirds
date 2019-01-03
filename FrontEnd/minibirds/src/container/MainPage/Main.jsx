import React from 'react';
import Introduction from '../../Components/Main/Introduction';
import MainTweet from '../../Components/Main/MainTweet';
import MiniProfile from '../../Components/Main/MiniProfile';
import TwitList from '../../Components/Share/Twitlist';
import './Main.css';

const Main = () => {
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
};

export default Main;