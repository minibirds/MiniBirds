import React from 'react';
import './Edit.css';

const Edit = ({id}) => {
    return (
        <div className="input-box">
            <table>
                <tr>
                    <td><div className="input-letter">아이디</div></td>
                    <td><div className="input-info">{id}</div></td>
                </tr>
                <tr>
                    <td><div className="input-letter">현재 비밀번호</div></td>
                    <td><input className="input-info" /></td>
                </tr>
                <tr>
                    <td><div className="input-letter">새 비밀번호</div></td>
                    <td><input className="input-info" /></td>
                </tr>
                <tr>
                    <td><div className="input-letter">닉네임</div></td>
                    <td><input className="input-info" /></td>
                </tr>
                <tr>
                    <td><div className="input-letter">한줄소개</div></td>
                    <td><textarea className="input-intro" /></td>
                </tr>
            </table>
            <div className="accept-edit-btn">수정하기</div>
        </div>
    );
}

export default Edit;