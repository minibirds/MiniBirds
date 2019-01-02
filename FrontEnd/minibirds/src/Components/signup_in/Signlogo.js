import React from 'react'
import './Signlogo.css';
import logo from '../img/MiniBirds-Logo.png';

const Signlogo = ({}) => {
    return (
        <div className="logo-box">
            <div className="img-box">
                <img src={logo} alt="미니버즈"/>
            </div>
            <div className="minibirds">MINIBIRDS</div>
        </div>
    );
}

export default Signlogo;