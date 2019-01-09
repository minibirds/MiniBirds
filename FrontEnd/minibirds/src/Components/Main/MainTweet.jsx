import React, { Component } from "react";
import "./MainTweet.css";
import ProfileImg from "../img/profile-img-default.png";
import Gallery from "../img/gallery.png";
import axios from "axios";
import base_url from "../../base_url";

class MainTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      content: "",
      img: ""
    };
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
    console.log(this.state.content);
  };

  PostTwitContent = () => {
    const { userId, content, img } = this.state;
    axios({
      method: "post",
      url: `${base_url}/twit`,
      data: {
        userId: userId,
        content: content,
        img: img
      },
      headers: {
        token: `${localStorage.getItem("token")}`
      }
    }).then(res => {
      window.location.reload();
    });
  };

  render() {
    const { handleChange, PostTwitContent } = this;
    return (
      <div className="tweet">
        <div className="tweet-header">
          <img
            className="tweet-profile-img"
            src={ProfileImg}
            alt="profile_img"
          />
          <textarea
            onChange={handleChange}
            className="text-tweet"
            placeholder="무슨 일이 일어나고 있나요?"
          />
        </div>

        <div className="tweet-footer">
          <img className="btn-gallery" src={Gallery} alt="gallery" />
          <input type="file" accept="image/*" />
          <input
            className="btn-tweet"
            type="button"
            value="트윗하기"
            onClick={() => PostTwitContent()}
          />
        </div>
      </div>
    );
  }
}

export default MainTweet;
