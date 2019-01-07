import React, { Component } from 'react';
import TwitList from '../../Components/Share/Twitlist'; 
import './MyTwitList';

class MyTwitList extends Component {
    render() {
        return (
            <div className="mytwitlist-background-box">
                <TwitList />
            </div>
        );
    }
}

export default MyTwitList;