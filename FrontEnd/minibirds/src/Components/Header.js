import React from 'react';
import './CSS/Header.css';
import Home from './img/home-button.png';

const Header = ({onTwit, logOut, onKeyPress}) => {
    return (
        <div className="header">
            <div className="home" onKeyPress={onKeyPress}>
            </div>
            <div className="header_right">
                <ul>
                    <li className="twit" onTwit={onTwit}>트윗하기</li>
                    <li className="twit" logOut={logOut}>로그아웃</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;