import React from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';

const Signin = ({}) => {
    return (
        <div className="input-wapper">
            <div className="sign">SIGN IN</div>    
            <div className="input-box">
                <table>
                    <tr>
                        <td><div className="input-id">ID</div></td>
                        <td><input className="input" /></td>
                        <td rowSpan="2"><div className="log-in">로그인</div></td>
                    </tr>                    
                    <tr>
                        <td><div className="input-pw">PW</div></td>
                        <td><input className="input" /></td>
                    </tr>
                </table>
            </div>
            <div className="info-box">
                <div className="no-account">계정이 없으신가요?</div>
                <Link to='/signup' ><div className="go-signin">회원가입</div></Link>
            </div>
            <div className="error-code">아이디 또는 비밀번호가 잘못되었습니다.</div>
        </div>
    );
}

export default Signin;