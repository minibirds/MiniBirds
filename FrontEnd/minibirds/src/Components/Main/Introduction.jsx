import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return(
    <div className="introduction-container">
      <div className="title">개발자 소개</div>
      <div className="developer">
        <div className="name-container">
          <span className="name">남유림</span>
        </div>
        <div className="part">Front-End</div>
      </div>
      <div className="developer">
        <div className="name-container">
          <span className="name">장소희</span>
        </div>
        <div className="part">Front-End</div>
      </div>
      <div className="developer">
        <div className="name-container">
          <span className="name">전윤주</span>
        </div>
        <div className="part">Front-End</div>
      </div>
      <div className="developer">
        <div className="name-container">
          <span className="name">황신우</span>
        </div>
        <div className="part">Back-End</div>
      </div>
      
    </div>
  );
}

export default Introduction;