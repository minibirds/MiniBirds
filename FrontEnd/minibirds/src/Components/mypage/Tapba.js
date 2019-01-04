import React from 'react';
import './Tapba.css';

const Tapba = ({listClassName, twitNumber, following, follower, twitlist, followlist, history}) => {
    return (
        <div className="tap-bar">
            <div className="letter-box">
                <table className="letter-table">
                    <tr className="first-table">
                        <td onClick={() => history.push('/mypage/twitlist')} className="table-twit">나의 트윗</td>
                        <td onClick={() => history.push('/mypage/following')}  className="table-following">팔로잉</td>
                        <td onClick={() => history.push('/mypage/followers')} className="table-follower">팔로워</td>
                    </tr>
                    <tr className="second-table">
                        <td className="twit-number">{twitNumber}0</td>
                        <td className="following-number">{following}0</td>
                        <td className="follower-number">{follower}0</td>
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