import React, {Component} from 'react';
import './Edit.css';
import axios from 'axios';
import base_url from '../../base_url';

class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.id,
            pw: '',
            newpw : '',
            nickname: this.props.nickname,
            intro : this.props.intro,
         }
    }
    render() { 
        this.handleChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
                
            })
        }

        this.handleModify = () => {
            const {history} = this.props;
            axios
                .put(
                    `${base_url}`, [{
                        nickname: this.state.nickname,
                        password: this.state.pw,
                        newPassword : this.state.newpw,
                        intro: this.state.intro
                    }], {
                        header: {
                            'token': `${localStorage.getItem('token')}`,
                        },
                    }).then((res) => {
                        if (res.data.status === 401) {
                            alert("현재 비밀번호가 맞지 않습니다. 다시 한 번 입력해 주세요.");
                        } else if (res.data.status === 403) {
                            alert("다른 사람의 정보는 수정할 수 없습니다.");
                        } else {
                            history.push('/mypage');
                        }
                    })
        }
    return (
        <div className="input-box">
            <table>
                <tbody>
                <tr>
                    <td><span className="input-letter">아이디</span></td>
                    <td><div className="input-info">{this.state.id}</div></td>
                </tr>
                <tr>
                    <td><span className="input-letter">현재 비밀번호</span></td>
                    <td><input className="input-info" onChange={this.handleChange} value={this.state.pw} name="pw"/></td >
                </tr>
                <tr>
                    <td><span className="input-letter">새 비밀번호</span></td>
                     <td><input className="input-info" onChange={this.handleChange} value={this.state.newpw} name="newpw"/></td>
                </tr>
                <tr>
                    <td><span className="input-letter">닉네임</span></td>
                    <td><input className="input-info" placeholder={this.state.nickname} onChange={this.handleChange} value={this.state.nickname} name="nickname"/></td>
                </tr>
                <tr>
                    <td><span className="input-letter">한줄소개</span></td>
                    <td><textarea className="input-intro" placeholder={this.state.intro} onChange={this.handleChange} value={this.state.intro} name="intro"/></td>
                </tr>
                </tbody>
            </table>      
            <button className="accept-edit-btn" onClick={this.handleModify}>수정하기</button>
            
        </div>
    );
    }
}

export default Edit;