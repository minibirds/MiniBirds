import React, { Component } from 'react';
import FollowerList from '../../Components/mypage/Followlist';
import axios from 'axios';
import base_url from '../../base_url';
import ProfileImg from '../../Components/img/profile-img-default.png';
import './MainfollowerList.css';

class MainFollowerList extends Component {

    constructor() {
        super();
        this.state = {
            nickname: '',
            intro: '',
            img: ''
        }
    }

    componentDidMount() {
        this.GetFollowerInfo();
    }

    //자신의 팔로워 정보를 가져오는 함수
    GetFollowerInfo = () => {
        axios.get(`${base_url}/follower`, {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log("팔로워 정보");
            console.log(res.data);
            this.setState({
                nickname: res.data.list.nickname,
                intro: res.data.list.intro,
            });

            if (res.data.img === '') {
                this.setState({
                    img: ProfileImg
                })
            } else {
                this.setState({
                    img: res.data.img
                });
            }
        })
    }

    render() {
        return (
            <div className="mypage-followerlist-box">
                <FollowerList />
                <FollowerList />
                <FollowerList />
                <FollowerList />
                <FollowerList />
            </div>
        );
    }
}

export default MainFollowerList;