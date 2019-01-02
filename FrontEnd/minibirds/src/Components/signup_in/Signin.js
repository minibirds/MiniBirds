import React from 'react'
import { Link } from 'react-router-dom';
import './Signin.css'

const Signin = ({}) => {
    return (
        <div className="input-wrapper">
            <div className="sign">SIGN IN</div>  
            <div>
                <table className="input-table">
                    <tr>
                        <td><div className="input_set">NAME</div></td>
                        <td><input className="input" /></td>
                    </tr>
                    <tr>
                        <td><div className="input_set">ID</div></td>
                        <td><input className="input" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><div className="error">사용할 수 없는 아이디입니다.</div></td>
                    </tr>
                    <tr>
                        <td><div className="input_set">PW</div></td>
                        <td><input type="password"  className="input" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><div className="error">입력하지 않은 정보가 있습니다.</div></td>
                    </tr>
                </table>
                <div className="signin-btn">회원가입</div>
            </div>
        </div>
    );
}

export default Signin;