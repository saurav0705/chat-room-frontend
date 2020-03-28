import React from 'react';
import {Link} from 'react-router-dom';
import Members from '../Members/Members';
import './Infobar.css';
const Infobar = ({room,name,users}) => {
    return (
        <div className="infobar">
        <ul>
        <div className="name">{name}</div>
        
        <li className="room"><span className="room-header">ROOM</span><br/> {room}</li>
        <li className="Members">
            <div className="member-text">Members</div>
            <div className="list"><Members users={users}/></div>
        </li>
        <li className="right"><Link to="/" className="link"><img className="exit" src="/exit.png" height="40px"/></Link></li>
        </ul>
        
        </div>    
            
            
    )
}

export default Infobar;