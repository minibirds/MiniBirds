import React, {Component} from 'react';
import './Header.css';
import Home from '../img/home-button.png';
import logo from '../img/MiniBirds-Logo.png';
import Twit from '../Main/MainTweet';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    AppearTwitComponent = () => {
        const TwitBackground = document.getElementById('small-twit-back');
    
        if (TwitBackground.className === 'small-twit-back-on') {
            TwitBackground.className = 'small-twit-back';
        } else {
            TwitBackground.className = 'small-twit-back-on';
        }
    };
    
    AppearConfirm = () => {
        // eslint-disable-next-line no-unused-expressions
        window.confirm('로그아웃 하시겠습니까?') ? localStorage.setItem('token', '') : null ;
    
        this.CheckToken(); 
        
    }

    CheckToken = () => {
        const {history} = this.props;
        if(localStorage.getItem('token') === ''){
            history.push('/signin');
            window.location.reload();
        }
      }

    render() { 
        const {onTwit, logOut, onKeyPress, Form} = this.props;
        return ( 
            <div>
        <div className="small-twit-back" id="small-twit-back" onClick={() => this.AppearTwitComponent()}>
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
                    <li className="twit" onClick={() => this.AppearTwitComponent()} >트윗하기</li>
                    <li className="twit" logOut={logOut} onClick={()=> this.AppearConfirm()} >로그아웃</li>
                </ul>
            </div>
        </div>
    </div>
         );
    }
}

export default withRouter(Header);
