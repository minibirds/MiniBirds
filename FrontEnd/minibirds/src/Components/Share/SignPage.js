import React from 'react';
import './SignPage.css';

const SignPage = ({left, right}) => {
    return (
        <div className="background-box">
            <div className="sign-container">
                <div className="left-component">
                    {left}
                </div>
                <div className="right-component">
                    {right}
                </div>
            </div>
        </div>
    );
}

export default SignPage;