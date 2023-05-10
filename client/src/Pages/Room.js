import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import  '../assets/Room.css'
import {Container, Card} from 'react-bootstrap'
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
      <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
          <Card style={{width: '600px',height: '350px'}} >
      <div className='chat__container'>
        <h1 className='themeable' style={{color:'black'}} >Присоединяйтесь к чату</h1>

        <form className='form'>
          <div className='group'>
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Имя пользоватея"
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
              placeholder="Номер комнаты"
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
      </Card>
      </Container>
    </div>
  );
};

export default Room;
