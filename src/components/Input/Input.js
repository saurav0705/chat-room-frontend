import React from 'react';

import './Input.css';
const Input = ({message,setMessage,sendMessage}) => {
    const sendMsg = (event) =>{
        var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      event.target.blur();
      sendMessage(event);
    }
}
    return (<div className="input-ul">
        
            <input className="input" type="text" placeholder="Type Message... " value={message} onKeyPress={(event) =>sendMsg(event)} onChange={(event => setMessage(event.target.value))}/>
        
        {/* <div>
            <button  className="send" onClick={(event)=>sendMessage(event)}>send</button>
        </div> */}
        
        </div>
    )
}

export default Input;