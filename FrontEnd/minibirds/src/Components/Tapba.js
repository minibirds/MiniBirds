import React from 'react';
import './CSS/Tapba.css';

const Tapba = ({twitNumber, following, follower, twitlist, followlist}) => {
    return (
        <div className="main-box">
            <div className="letter-box">
                <table className="letter-table">
                    <tr className="first-table">
                        <td className="table-twit">나의 트윗</td>
                        <td className="table-following">팔로잉</td>
                        <td className="table-follower">팔로워</td>
                    </tr>
                    <tr className="second-table">
                        <td className="twit-number">{twitNumber}</td>
                        <td className="following-number">{following}</td>
                        <td className="follower-number">{follower}</td>
                    </tr>
                </table>
            </div>
            <div className="twit-list">
                {twitlist}
            </div>
            <div>
                {followlist}
            </div>
        </div>
    );
}

export default Tapba;