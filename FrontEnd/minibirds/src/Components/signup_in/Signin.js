import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import base_url from '../../base_url';

class Signin extends Component {
    state = {
        id : '',
        pw : '',
        isError: false,
        check: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleLogin = () => {
        const {id, pw} = this.state;
        const userInfo = {id: id, password: pw};
        const {history} = this.props;

        axios.post(`${base_url}/auth/signIn`, userInfo)
        .then((res) => {
                localStorage.setItem('token' , res.data.token);
                this.props.signin(
                    res.data.user.id,
                    res.data.user.nickname,
                    res.data.user.password,
                    res.data.user.intro,
                );
                
                history.push('/');
            }).catch((res) => {
                this.setState({
                    isError: true,
                });
                console.log(res);
                console.log('에러');
            })
    }
    render() {

        let errorClassName = "error-code";
        if(!this.state.isError) {
            errorClassName += " hidden";
        }
        return (
            <div className="input-wapper">
                <div className="sign">SIGN IN</div>    
                <div className="signin-input-box">
                    <table>
                        <tbody>
                            <tr>
                                <td><div className="input-id">ID</div></td>
                                <td><input className="input" onChange={this.handleChange} value={this.state.id} name="id"/></td>
                                <td rowSpan="2"><button className="log-in" onClick={this.handleLogin}>로그인</button></td>
                            </tr>                    
                            <tr>
                                <td><div className="input-pw">PW</div></td>
                                <td><input type="password" className="input" onChange={this.handleChange} value={this.state.pw} name="pw"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="info-box">
                    <div className="no-account">계정이 없으신가요?</div>
                    <div className="go-signin">회원가입</div>
                </div>
                <div className={errorClassName}>아이디 또는 비밀번호가 잘못되었습니다.</div>
            </div>
        );
    }
}

export default withRouter(Signin) ;