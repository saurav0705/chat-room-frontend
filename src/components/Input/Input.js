import React from 'react';

import './Input.css';
const Input = ({message,setMessage,sendMessage}) => {
    return (<>
        <div className="sendbox">
        <input className="input" type="text" placeholder="type message" value={message} onChange={(event => setMessage(event.target.value))}/>
        <button  className="send" onClick={(event)=>sendMessage(event)}>send</button>
        </div>
        </>
    )
}

export default Input;