import React from 'react';
import './CSS/Tapba.css';

const Tapba = ({twitNumber, following, follower}) => {
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
                        <td className="twit-number">1122</td>
                        <td className="following-number">4444</td>
                        <td className="follower-number">2222</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Tapba;