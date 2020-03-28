import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css'
const Messages = ({messages,name}) => {
    const messagesEndRef = useRef(null);
    useEffect(()=>{
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    },[messages])
    return (
            <div  className="msgBox">
            <ScrollToBottom>
           {messages.map((msg,index)=>{
               return (
                   <Message key={index} message={msg} name={name}/>
               )
           })}
           <div ref={messagesEndRef} />
           </ScrollToBottom>
           </div>
       

    )
}

export default Messages;