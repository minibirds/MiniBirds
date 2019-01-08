import React, { Component } from 'react';
import TwitList from '../../Components/Share/Twitlist';
import TwitProfileImg from '../../Components/img/profile-img-default.png'
import axios from 'axios';
import base_url from '../../base_url';

class MainTwitList extends Component {
    constructor() {
        super();
        this.state = {
            postId: '',
            userNickname: '',
            content: '',
            img: '',
            created_At: '',
            userImg: TwitProfileImg
        }
    }

    GetFollowTwitInfo = () => {
        axios.get(`${base_url}/`)
        .then((res) => {
            this.setState({
                postId: res.data.postId,
                userId: res.data.userId,
                content: res.data.content,
                img: res.data.img,
                created_At: res.data.created_At
            })
        })
    }

    render() {
        const { postId, userNickname, content, img, created_At, userImg} = this.state;
       
        return(
            <TwitList 
                postId={postId}
                userNickname={userNickname}
                content={content}
                img={img}
                created_At={created_At}
                userImg={userImg}
            />
        );
    }
}

export default MainTwitList;