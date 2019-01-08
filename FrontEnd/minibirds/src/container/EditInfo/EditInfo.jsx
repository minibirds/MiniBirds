import React , { Component } from "react";
import EditImg from "../../Components/Edit/Editimg";
import Edit from "../../Components/Edit/Edit.jsx";
import "./EditInfo.css";

class EditInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, nickname, pw, intro, history } = this.props
    return (
      <div className="edit-container">
        <EditImg />
        <Edit id={id} nickname={nickname} pw={pw} intro={intro} history={history} />
    </div>
    );
  }
}

export default EditInfo;
