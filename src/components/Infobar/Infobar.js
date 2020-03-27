import React from 'react';
import {Link} from 'react-router-dom';
import './Infobar.css';
const Infobar = ({room,name}) => {
    return (
        <div className="infobar">
        <ul>
        <li className="name">{name}</li>
        <li className="room"><span className="room-header">ROOM</span><br/> {room}</li>
        <li className="right"><Link to="/" className="link"><img className="exit" src="/exit.png" height="40px"/></Link></li>
        </ul>
        </div>    
            
            
    )
}

export default Infobar;