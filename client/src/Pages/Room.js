import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import  '../assets/Room.css'
const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

const Room = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((v) => !v);

    if (isDisabled) e.preventDefault();
  };

  return (
    <div className='wrap'>
      <div className='chat__container'>
        <h1 className='heading' style={{color:'black'}}>Присоединяйтесь к чату</h1>

        <form className='form'>
          <div className='group'>
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Username"
              className='input'
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className='group'>
            <input
              type="text"
              name="room"
              placeholder="Room"
              value={values[ROOM]}
              className='input'
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <Link
            className='group'
            onClick={handleClick}
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
          >
            <button type="submit" className='button'>
              Присоединиться
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Room;
