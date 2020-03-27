import React from 'react';
import './Message.css'
const Message = ({message,name}) => {
    return (
        <div className="block">
            {
                message.user.toLowerCase() === name 
                ?
           
                <div  className="message user">
                 <div className="sender">{message.user}</div>
                 <div className="message-text user-msg">{message.text}</div>
                
                </div>
                
           
                :
                <div  className={message.user.toLowerCase() === 'admin' ?"admin message":"other message"}>
                    <div  className={message.user.toLowerCase() === 'admin' ?"admin message-text":"other message-text other-msg"}>{message.text}</div>
                    {message.user.toLowerCase() === 'admin' ? null:
                    <div className="sender">{message.user}</div>}    
                </div>
            }
           
            
        </div>

    )
};


export default Message;