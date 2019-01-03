import React from 'react';
import './Header.css';
import Home from '../img/home-button.png';
import logo from '../img/MiniBirds-Logo.png';
import Twit from '../Main/MainTweet';
import {Link} from 'react-router-dom';

const AppearTwitComponent = () => {
    const TwitBackground = document.getElementById('small-twit-back');

    if (TwitBackground.className === 'small-twit-back-on') {
        TwitBackground.className = 'small-twit-back';
    } else {
        TwitBackground.className = 'small-twit-back-on';
    }
};

const Header = ({onTwit, logOut, onKeyPress, Form}) => (
    <div>
        <div className="small-twit-back" id="small-twit-back" onClick={() => AppearTwitComponent()}>
            <div onClick={(e)=>e.stopPropagation()} className="small-twit-area">
                <Twit />
            </div>
        </div>
        <div className="main-header">
            <Link to="../" className="home">
                <img src={Home} alt="홈" className="home-img" ></img> 
                <div className="home-letter">홈</div>
            </Link>
            <div className="main">
                <img src={logo} alt="로고" className="logo-img"  onClick={() => window.location.reload()}></img>
            </div>
            <div className="header-right">
                <ul className="twit_box">
                    <li className="twit" onClick={() => AppearTwitComponent()} >트윗하기</li>
                    <li className="twit" logOut={logOut}>로그아웃</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;
