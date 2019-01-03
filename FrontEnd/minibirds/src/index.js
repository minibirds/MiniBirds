import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signin from './Components/signup_in/Signin.js';
import Signlogo from './Components/signup_in/Signlogo.js';
import Signup from './Components/signup_in/Signup.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export {
    Signin, 
    Signlogo, 
    Signup
};