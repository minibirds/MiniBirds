import React from 'react'
import './CSS/followlist.css'

const Followlist = ({profileImg, follow, nickName, Info}) => {
    return (
        <div className="main-box">
            <div className="back-box"></div>
            <div className="btn-box">
                <div className="big-box">
                    <div className="small-box">
                            <img src={profileImg} />
                        </div>
                    </div>
                <div className="follow-btn">{follow}팔로잉</div>
            </div>
            <div className="letter-box">
                <div className="user-name">{nickName}미미</div>
                <div className="user-intro">{Info} ㅇㄴㅁ어ㅗㅓ놈너ㅗㅇ우아아아ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
            </div>
        </div>
    );
}


export default Followlist;