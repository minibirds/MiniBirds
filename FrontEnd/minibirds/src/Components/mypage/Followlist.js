import React from 'react'
import './followlist.css'
import ProfileImg from '../img/profile-img-default.png';

const Followlist = ({profileImg, follow, nickName, Info}) => {
    return (
        <React.Fragment>
            <div className="follow-content">
                <div className="btn-box">
                    <img src={ProfileImg} alt='' className='follow-profile-img' />
                    <div className="user-name-text">{nickName}미미</div>
                <div className="follow-btn">{follow}팔로잉</div>
            </div>
            <div className="text-content">
                <div className="user-intro">{Info} ㅇㄴㅁ어ㅗㅓ놈너ㅗㅇ우아아아ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
            </div>
            </div>
        </React.Fragment>

    );
}

export default Followlist;