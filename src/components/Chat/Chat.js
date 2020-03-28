import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Input from "../Input/Input";
import Messages from '../Messages/Messages';
import Infobar from '../Infobar/Infobar';
import { useHistory } from "react-router-dom";
import './Chat.css';

let socket;

const Chat = ({location}) => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "https://chatroom98.herokuapp.com/";
    let history = useHistory();


    useEffect(() => {
        // if(!localStorage.getItem('logged')){
        //     history.push('/')
        // }
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room.trim().toLowerCase());
        setName(name.trim().toLowerCase())
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);

    useEffect(()=>{
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
          });
          
          socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
          console.log(users);
          
    },[])
    
    
    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }
    
    return(
        <div className="chatBox">
            <Infobar room={room} name = {name} users={users}/>
            <Messages messages={messages} name={name}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
    )
}

export default Chat;