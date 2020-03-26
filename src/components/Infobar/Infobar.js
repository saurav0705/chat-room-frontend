import React from 'react';
import {Link} from 'react-router-dom';

const Infobar = ({room,name}) => {
    return (<div className="infobar">
        <h1> Name : {name}</h1>
        <span>Room : {room}</span><Link to="/"><h1>Leave Room</h1></Link>
            </div>
    )
}

export default Infobar;