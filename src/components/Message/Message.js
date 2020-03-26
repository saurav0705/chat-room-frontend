import React from 'react';
import './Message.css'
const Message = ({message,name}) => {
    return (
        <div>
            {
                message.user === name 
                ?
            <div >
                <h3 className="user message">{message.text}<p align="right" className="author"><sub></sub>{message.user}</p></h3></div>
                :
                <div><h3  className={message.user.toLowerCase() === 'admin' ?"admin message":"other message"}>{message.text}<p align="right" className="author">{message.user.toLowerCase()}</p></h3></div>
            }
        </div>

    )
};


export default Message;