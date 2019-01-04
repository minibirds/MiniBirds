import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super();

        this.state = {
            id: '',
            password: '',
            nickname: ''
        };
    }

    ChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    postUserInfo = () => {

        axios({
            method: 'post',
            url: 'http://13.59.174.126:3000/auth/signup',
            data: {
                id: this.state.id,
                password: this.state.password,
                nickname: this.state.nickname
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

       /* axios.post('http://13.59.174.126:3000/auth/signup', {userInfo})
        .then((res) => {
            console.log(res.data);
        }) */
    }

    render() {
        const {
            ChangeInput,
            postUserInfo,
        } = this;

        const {
            id,
            password,
            nickname,
        } = this.state;

        return (
            <div className="input-wrapper">
                <div className="sign">SIGN UP</div>  
                <div>
                    <table className="input-table">
                    <tbody>
                        <tr>
                            <td><div className="input_set">NAME</div></td>
                            <td><input className="input" value={nickname} onChange={ChangeInput} name="nickname" /></td>
                        </tr>
                        <tr>
                            <td><div className="input_set">ID</div></td>
                            <td><input className="input" value={id} onChange={ChangeInput} name="id" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><div className="error">사용할 수 없는 아이디입니다.</div></td>
                        </tr>
                        <tr>
                            <td><div className="input_set">PW</div></td>
                            <td><input type="password"  className="input" value={password} onChange={ChangeInput} name="password" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><div className="error">입력하지 않은 정보가 있습니다.</div></td>
                        </tr>
                        </tbody>
                    </table>
                    <button onClick={() => postUserInfo()}className="signin-btn">회원가입</button>
                </div>
            </div>
        )
    }
}

export default Signup;