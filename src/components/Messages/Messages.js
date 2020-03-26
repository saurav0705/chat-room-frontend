import React from 'react';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css'
const Messages = ({messages,name}) => {
    return (
        
            <ScrollToBottom className="msgBox">
           {messages.map((msg,index)=>{
               return (
                   <Message key={index} message={msg} name={name}/>
               )
           })}
           </ScrollToBottom>
       

    )
}

export default Messages;