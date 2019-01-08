import React, { Component } from 'react';
import FollowerList from '../../Components/mypage/Followlist';
import './MainfollowerList';

class MainFollowerList extends Component {
    render() {
        return (
            <div className="mypage-followerlist-box">
                <FollowerList />
                <FollowerList />
                <FollowerList />
                <FollowerList />
            </div>
        );
    }
}

export default MainFollowerList;