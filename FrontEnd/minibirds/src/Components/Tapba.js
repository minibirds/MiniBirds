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
                        <td className="twit-number">{twitNumber}22</td>
                        <td className="following-number">{following}3</td>
                        <td className="follower-number">{follower}5</td>
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