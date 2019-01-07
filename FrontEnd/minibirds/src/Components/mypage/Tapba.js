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
        axios.get(`${base_url}/auth/twit/${this.state.id}`)
        .then((response) => {
          this.setState({
            twitNumber: response.data.num
          });
        })
      }
    
    GetFollowerNum = () => {
        axios.get(`${base_url}/follower/${this.state.id}`)
        .then((response) => {
            this.setState({
                followerNumber: response.data.num
            });
        })
    }

    GetFollowingNum = () => {
        axios.get(`${base_url}/following/${this.state.id}`)
        .then((response) => {
            this.setState({
                followingNumber: response.data.num
            });
        })
    }

    render() {
        const { twitNum, followerNum, followingNum } = this.state;
        const { history } = this.props;

        return (
            <div className="tap-bar">
                <div className="letter-box">
                    <table className="letter-table">
                        <tbody>
                            <tr className="first-table">
                                <td onClick={() => history.push('/mypage/twitlist')} className="table-twit">나의 트윗</td>
                                <td onClick={() => history.push('/mypage/following')}  className="table-following">팔로잉</td>
                                <td onClick={() => history.push('/mypage/followers')} className="table-follower">팔로워</td>
                            </tr>
                            <tr className="second-table">
                                <td className="twit-number" onClick={() => history.push('/mypage/twitlist')}>{twitNum}</td>
                                <td className="following-number" onClick={() => history.push('/mypage/following')}>{followingNum}</td>
                                <td className="follower-number" onClick={() => history.push('/mypage/followers')}>{followerNum}</td>
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