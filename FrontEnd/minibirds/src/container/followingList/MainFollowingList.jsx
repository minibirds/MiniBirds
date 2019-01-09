import React, { Component } from 'react'
import FollowingList from '../../Components/mypage/Followlist';
import axios from 'axios';
import base_url from '../../base_url';
import ProfileImg from '../../Components/img/profile-img-default.png';
import './MainFollowingList.css';

class MainFollowingList extends Component {

    constructor() {
        super();
        this.state = {
            followingList: [ 
                {
                    nickname: 'a',
                    intro: 'a',
                    img: ''
                }, {
                    nickname: 'b',
                    intro: 'b',
                    img: ''
                }
            ]
        };
    }

    componentDidMount() {
        this.GetFollowingInfo();
    }

    GetFollowingInfo = () => {
        axios.get(`${base_url}/following`, {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            console.log("팔로잉 정보");
            // console.log(res.data.list[0].nickname);
            // this.setState({
            //     nickname: res.data.list[0].nickname,
            //     intro: res.data.list[0].intro,
            // });
            console.log(this.state.nickname);
            console.log(this.state.intro);
            if (res.data.img === '') {
                this.setState({
                    img: ProfileImg
                });
            } else {
                this.setState({
                    img: res.data.img
                });
            }
        })
    }

    render() {
        const Following = this.state.followingList.map((item, i) => (
            <FollowingList
                nickname={item.nickname}
                intro={item.intro}
                img={item.img}
            />
        ));
        return (
            <div className="mypage-following-background-box">
                {Following}
            </div>
        );
    }
}

export default MainFollowingList;