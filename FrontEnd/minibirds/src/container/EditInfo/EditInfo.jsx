import React from 'react';
import EditImg from '../../Components/Edit/Editimg';
import Edit from '../../Components/Edit/Edit';
import './EditInfo.css';

const EditInfo = ({id, nickname, pw, intro}) => (
  <div className="edit-container">
    <EditImg/>
    <Edit
      id={id}
      nickname={nickname}
      pw={pw}
      intro={intro}  
    />
  </div>
);

export default EditInfo;