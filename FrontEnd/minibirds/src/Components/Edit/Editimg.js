import React from 'react';
import './Editimg.css';

const Editimg = ({profileImg}) => {
    return (
        <div className="profile-box">
            <div className="profile-img">
                <img src={profileImg} alt=''/>
            </div>
            <span className="img-edit">프로필 사진 변경</span>
        </div>
    );
}

export default Editimg;