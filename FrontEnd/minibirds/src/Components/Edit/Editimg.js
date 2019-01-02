import React from 'react';
import './Editimg.css';

const Editimg = ({profileImg}) => {
    return (
        <div className="profile-box">
            <div className="profile-img">
                <img src={profileImg} />
            </div>
            <div className="img-edit">프로필 사진 변경</div>
        </div>
    );
}

export default Editimg;