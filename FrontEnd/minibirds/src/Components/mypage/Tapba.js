import React, { Component } from 'react';
import './Tapba.css';
import axios from 'axios';
import base_url from '../../base_url';

class Tapba extends Component {

    constructor() {
        super();
        this.state = {
            twitNumber: 0,
            followerNumber: 0,
            followingNumber: 0
        }
    }

    componentDidMount() {
        this.GetTwitNum();
        this.GetFollowerNum();
        this.GetFollowingNum();
    }

    GetTwitNum = () => {
        axios.get(`${base_url}/twit`, {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
          })
        .then((response) => {
          this.setState({
            twitNumber: response.data.num
          });
        })
    }
    
    GetFollowerNum = () => {
        axios.get(`${base_url}/follower`, {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
          })
        .then((response) => {
            this.setState({
                followerNumber: response.data.num
            });
        })
    }

    GetFollowingNum = () => {
        axios.get(`${base_url}/following`, {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
          })
        .then((response) => {
            this.setState({
                followingNumber: response.data.num
            });
        })
    }

    handleTwitColorChange = () => {
        const twitColor = document.getElementById('table-twit');
        const FollowingColor = document.getElementById('table-following');
        const FollowerColor = document.getElementById('table-follower');
        const twitNumColor = document.getElementById('twit-number');
        const FollowingNumColor = document.getElementById('following-number');
        const FollowerNumColor = document.getElementById('follower-number');

        if (twitColor.className === 'table-twit') {
            twitColor.className = 'on-table-twit';
            FollowerColor.className = 'table-follower';
            FollowingColor.className = 'table-following';
            twitNumColor.className = 'on-twit-number';
            FollowerNumColor.className = 'follower-number';
            FollowingNumColor.className = 'following-number';
        }
    }

    handleFollowingColorChange = () => {
        const twitColor = document.getElementById('table-twit');
        const FollowingColor = document.getElementById('table-following');
        const FollowerColor = document.getElementById('table-follower');
        const twitNumColor = document.getElementById('twit-number');
        const FollowingNumColor = document.getElementById('following-number');
        const FollowerNumColor = document.getElementById('follower-number');

        if (FollowingColor.className === 'table-following') {
            FollowingColor.className = 'on-table-following';
            twitColor.className = 'table-twit';
            FollowerColor.className = 'table-follower';
            twitNumColor.className = 'twit-number';
            FollowerNumColor.className = 'follower-number';
            FollowingNumColor.className = 'on-following-number';
        }
    }

    handleFollowerColorChange = () => {
        const twitColor = document.getElementById('table-twit');
        const FollowingColor = document.getElementById('table-following');
        const FollowerColor = document.getElementById('table-follower');
        const twitNumColor = document.getElementById('twit-number');
        const FollowingNumColor = document.getElementById('following-number');
        const FollowerNumColor = document.getElementById('follower-number');

        if (FollowerColor.className === 'table-follower') {
            console.log(1);
            FollowingColor.className = 'table-following';
            twitColor.className = 'table-twit';
            FollowerColor.className = 'on-table-follower';
            twitNumColor.className = 'twit-number';
            FollowerNumColor.className = 'on-follower-number';
            FollowingNumColor.className = 'following-number';
        }
    }

    onClickTwitList = () => {
        this.handleTwitColorChange();
    }

    onClickFollower = () => {
        this.handleFollowerColorChange();
    }

    onClickFollowing = () => {
        this.handleFollowingColorChange();
    }

    OnClickTabbarElement = (e) => {
        const { ListToggle } = this.props;        
        const TargetClass = e.target.className;

        ListToggle(TargetClass);
    }

    render() {
        const { twitNumber, followerNumber, followingNumber } = this.state;
        const {
            onClickTwitList,
            onClickFollower,
            onClickFollowing,
        } = this;

        return (
            <div className="tap-bar">
                <div className="letter-box">
                    <table className="letter-table">
                        <tbody>
                            <tr className="first-table">
                            <td onClick={(e) => this.OnClickTabbarElement(e)} className="table-twit" id="table-twit">나의 트윗</td>
                            <td onClick={(e) => this.OnClickTabbarElement(e)} className="table-follower" id="table-follower">팔로워</td>
                            <td onClick={(e) => this.OnClickTabbarElement(e)}  className="table-following" id="table-following">팔로잉</td>
                            </tr>
                            <tr className="second-table">
                            <td className="twit-number" id="twit-number" onClick={() => onClickTwitList()}>{twitNumber}</td>
                            <td className="follower-number" id="follower-number" onClick={() => onClickFollower()}>{followerNumber}</td>
                                <td className="following-number" id="following-number" onClick={() => onClickFollowing()}>{followingNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="twit-list">
                </div>
                <div className="follow-list">
                </div>
            </div>
        );
    }
}

export default Tapba;