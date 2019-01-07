import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Signup.css';
import './Signin.css';
import axios from 'axios'
import base_url from '../../base_url';

class Signup extends Component {
    constructor(props) {
        super();

        this.state = {
            id: '',
            password: '',
            nickname: '',
            errorCode: '',
            check: false,
        };
    }

    ChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.postUserInfo();
        }
    }

    postUserInfo = () => {
        const {history} = this.props;
        const {id, password, nickname} = this.state;

        if (id === '' || password === '' || nickname === '') {
            window.alert("입력하지 않은 정보가 있습니다. 다시 입력해주세요.");
        } else {
            axios({
                method: 'post',
                url: `${base_url}/auth/signup`,
                data: {
                    id: id,
                    password: password,
                    nickname: nickname
                }
            })
            .then((response) => {
                if (response.data.status === 405) {
                    alert(response.data.message);
                } else {
                    alert("회원가입에 성공하셨습니다. 로그인 후 미니버드 홈페이지를 이용해주시길 바랍니다.");
                    this.setState({
                        check: true
                    });

                    history.push('/signin');
                }
            })
        }
    }

    render() {
        const {
            handleKeyPress,
            ChangeInput,
            postUserInfo,
        } = this;

        const {
            id,
            password,
            nickname,
            check
        } = this.state;

        return (
            <div className="input-wrapper">
                <div className="sign">SIGN UP</div>  
                <div>
                    <table className="input-table">
                    <tbody>
                        <tr>
                            <td><div className="input_set">NAME</div></td>
                            <td><input className="input" value={nickname} onChange={ChangeInput} onKeyPress={handleKeyPress} name="nickname" /></td>
                        </tr>
                        <tr>
                            <td><div className="input_set">ID</div></td>
                            <td><input className="input" value={id} onChange={ChangeInput} onKeyPress={handleKeyPress} name="id" /></td>
                        </tr>
                        <tr>
                            <td><div className="input_set">PW</div></td>
                            <td><input type="password"  className="input" value={password} onChange={ChangeInput} onKeyPress={handleKeyPress} name="password" /></td>
                        </tr>
                        </tbody>
                    </table>
                    <Link to={check? '/signin':'/signup'}><div onClick={() => postUserInfo()} className="signin-btn">회원가입</div></Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);