import React from 'react';
import './CSS/Tapba.css';
import { Link } from 'react-router-dom';


const Tapba = ({twitNumber, following, follower, twitlist, followlist}) => {
    return (
        <div className="main-box">
            <div className="letter-box">
                <table className="letter-table">
                    <tr className="first-table">
                        <Link exact to='/mypage/twitlist'><td className="table-twit">나의 트윗</td></Link>
                        <Link exact to='/mypage/following'><td className="table-following">팔로잉</td></Link>
                        <Link exact to='/mypage/follower'><td className="table-follower">팔로워</td></Link>
                    </tr>

                    <tr className="second-table">
                        <Link exact to='/mypage/twitlist'><td className="twit-number">{twitNumber}22</td></Link>
                        <Link exact to='/mypage/following'><td className="following-number">{following}3</td></Link>
                        <Link exact to='/mypage/follower'><td className="follower-number">{follower}5</td></Link>
                    </tr>
                </table>
            </div>
            <div className="twit-list">
                {twitlist}
            </div>
            <div className="follow-list">
                {followlist} 
            </div>
        </div>
    );
}

export default Tapba;