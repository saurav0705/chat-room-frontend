
import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import './Join.css';

const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [rooms,setRooms] = useState([]);
    useEffect(()=>{
        localStorage.clear();
        localStorage.setItem('logged',false);
        fetch('https://chatroom98.herokuapp.com/rooms/')
        .then(res => res.json())
        .then(res => setRooms(res))
    })

    return(
        <div className="flex">
        <div className="center">
            
            <center><img src="/chat.png" height="100" width="100"/>
            <h1 className="heading">CHATONN</h1>
            <h4 className="heading sub">JOIN CHAT</h4>
            </center>
            <input className="join" type="text" name="name" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <input className="join" value={room} type="text" name="room" placeholder="Enter Room" onChange={(event)=>setRoom(event.target.value)}/>
            <br/>
            { name === '' || room === '' ?
            <h6 className="warning"><center>Both fields are necessary</center></h6> : null}
            <Link className={name === '' || room === '' ? "disabled":"enabled"} onClick={e => (!name || !room) ? e.preventDefault() : localStorage.setItem('logged',true)} to={`/chat?name=${name}&room=${room}`}>
          <button className={name === '' || room === '' ? "disabled join-btn":"enabled join-btn"}  type="submit">JOIN</button>
        </Link>         
        </div>

        { rooms.length !== 0 ? 
        
            <div className="center available">
                <center><h1>Live Rooms</h1></center>
                {rooms.map(rm => <div key={rm} className="alive-rooms" onClick={() => setRoom(rm)}>{rm}</div>)}
                </div>

        :null    
        }

        </div>
    )
}

export default Join;