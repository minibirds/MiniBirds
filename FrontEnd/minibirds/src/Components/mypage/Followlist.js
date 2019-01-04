import React from 'react'
import './followlist.css'

const Followlist = ({profileImg, follow, nickName, Info}) => {
    return (
        <div>
            <div className="background-box"></div>
            <div className="btn-box">
                <div className="behind-box">
                    <div className="inner-box">
                            <img src={profileImg} />
                        </div>
                    </div>
                <div className="follow-btn">{follow}팔로잉</div>
            </div>
            <div className="text-content">
                <div className="user-name-text">{nickName}미미</div>
                <div className="user-intro">{Info} ㅇㄴㅁ어ㅗㅓ놈너ㅗㅇ우아아아ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
            </div>
        </div>
    );
}


export default Followlist;