
import React,{useState} from 'react';
import { Link } from "react-router-dom";


const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    return(
        <div>
            <h1>JOIN CHAT</h1>
            <input type="text" name="name" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <input type="text" name="room" placeholder="Enter Room" onChange={(event)=>setRoom(event.target.value)}/>
            <br/>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button type="submit">JOIN</button>
        </Link>         
        </div>
    )
}

export default Join;