import React from "react";
import io from "socket.io-client";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import '../assets/Chat.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Messages from "../Components/Messages";
import icon from '../assets/emoji.svg'
const socket = io.connect('http://localhost:5000');
const Chat = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useState({ room: "", user: "" });
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [users, setUsers] = useState(0);
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);
  useEffect(() => {
    socket.on("message", ({ data }) => {
      setState((_state) => [..._state, data]);
    });
  }, []);
  useEffect(() => {
    socket.on("room", ({ data: { users } }) => {
      setUsers(users.length);
    });
  }, []);
  const leftRoom = () => {
    socket.emit("leftRoom", { params });
    navigate("/room");
  };
  const handleChange = ({ target: { value } }) => setMessage(value);
  const onEmojiClick = ({ emoji }) => setMessage(`${message} ${emoji}`);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) return;

    socket.emit("sendMessage", { message, params });

    setMessage("");
  };
 
 

 
  return ( 
      <div  className='chat__wrap'>
      
  <div className='chat__header'>
        <div className='chat__title'>Комната №{params.room}</div>
        <div className='users'>{users} users in this room</div>
        <button className='chat__left' onClick={leftRoom}>
          Покинуть комнату
        </button>
      </div>
      <div  className='chat__messages'>
        <Messages messages={state} name={params.name}/>
    
       
      </div>
      <form className='chat__form'onSubmit={handleSubmit}>
        <div className='chat__input'>
          <input
            type="text"
            name="message"
            placeholder="What do you want to say?"
            value={message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className='emoji'>
          <img src={icon} alt="" onClick={() => setOpen(!isOpen)} />

          {isOpen && (
            <div className='emojies'>
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <div className='chat__button'>
          <input type="submit"  onSubmit={handleSubmit} value="Send a message" />
        </div>
      </form>
    </div>
  );
};

export default Chat;
