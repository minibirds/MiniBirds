import React from 'react';
import './Header.css';
import ProfileImg from '../img/profile-img-default.png'
import Home from '../img/home-button.png';
import logo from '../img/MiniBirds-Logo.png';
import {Link} from 'react-router-dom';
import Twit from '../Main/MainTweet';

const Header = ({onTwit, logOut, onKeyPress, Form}) => (
    <div>
        <div className="small-twit-back" onClick={() => document.querySelector('small-twit-back').style.display = 'none'}>
            <div className="small-twit-area">
                <Twit />
            </div>
        </div>
        <div className="main-header">
            <div className="home">
                <Link to="../">
                    <img src={Home} alt="홈" className="home-img" ></img> 
                    <div className="home-letter">홈</div>
                </Link>
            </div>
            <div className="main">
                <img src={logo} alt="로고" className="logo-img"  onClick={() => window.location.reload()}></img>
            </div>
            <div className="header-right">
                <ul className="twit_box">
                    <li className="twit" OnClick={() => document.querySelector('small-twit-back').style.display = 'flex'} >트윗하기</li>
                    <li className="twit" logOut={logOut}>로그아웃</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;