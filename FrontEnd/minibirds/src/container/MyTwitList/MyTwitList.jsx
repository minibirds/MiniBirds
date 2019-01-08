import React, { Component } from 'react';
import TwitList from '../../Components/Share/Twitlist'; 
import base_url from '../../base_url';
import './MyTwitList.css';
import TwitProfileImg from '../../Components/img/profile-img-default.png'
import axios from 'axios';

class MyTwitList extends Component {

    constructor() {
        super();
        this.state = {
            postId: '',
            userNickname: '',
            content: '',
            img: '',
            created_At: '',
            userImg: TwitProfileImg,
            TwitList: []
        }
    }

    componentDidMount() {
        this.GetMyTwitInfo();
        this.GetMyNickname();
        this.GetMyProfileImg();
    }

    GetMyTwitInfo = () => {
        axios.get(`${base_url}/twit`)
        .then((res) => {
            this.setState({
                postId: res.data.postId,
                content: res.data.content,
                img: res.data.img,
                created_At: res.data.created_At,
            });
        });
    }

    GetMyNickname = () => {
        axios.post(`${base_url}/auth/signIn`)
        .then((res) => {
            this.setState({
                userNickname: res.data.nickName,
            });
        });
    }

    GetMyProfileImg = () => {
        axios.post(`${base_url}/profile/img`)
        .then((res) => {
            this.setState({
                userImg: res.data.img
            });
        });
    }

    render() {
        const { TwitList } = this.state;
        const MyTwit = TwitList.map(
            ({postId, userNickname, content, img, created_At, userImg}) => (
                <TwitList 
                postId={postId}
                userNickname={userNickname}
                content={content}
                img={img}
                created_At={created_At}
                userImg={userImg}
                />
            )
        );
        return (
            <div className="mytwitlist-background-box">
                <MyTwit />
            </div>
        );
    }
}

export default MyTwitList;