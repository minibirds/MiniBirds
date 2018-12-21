import React from 'react';
import Introduction from '../../Components/Main/Introduction';
import MainTweet from '../../Components/Main/MainTweet';
import MiniProfile from '../../Components/Main/MiniProfile';
import './Main.css';

const Main = () =>{
  return(
    <div className='main-page'>
      <MiniProfile/>
      <MainTweet/>
      <Introduction/>
    </div>
  );
};

export default Main;