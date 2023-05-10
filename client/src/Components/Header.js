import React, { useContext, useState,useEffect } from "react";
import { Container, FormControl, Nav, Navbar, Form, Button } from "react-bootstrap";
import logo from '../assets/logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROOM_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRACTICE_ROUTE, GUIDE_ROUTE, ADMIN_ROUTE, TEACHER_ROUTE, TASKS_ROUTE, GROUPS_ROUTE, SOLUTIONS_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import BtnDarkMode from "./btnDarkMode/BtnDarkMode";
import '../assets/Header.css'

const Header = observer(() => {



  const navigate = useNavigate();
    const {user} = useContext(Context)
    const history=useNavigate()
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.clear()
      navigate(HOME_ROUTE,{ replace: true });
  }

  const checkUser = (user) => {
    if (user._user.token) {
      return user._user.token.email
    } else {
      return user._user.email
    }
  }
  console.log(user._user)
    return (
        <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="secondary" variant="secondary" className="header">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              height="60"
              width="60"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">

          {user.isAuth ?
            user._user.role === 'USER' &&
            <>
            <Nav className="me-auto" >
              <button className='header__button'
                            onClick={() => navigate(HOME_ROUTE)}>Главная</button>
                                 <button className='header__button'
                            onClick={() => navigate(GUIDE_ROUTE)}>Руководство по С++</button>
                           
                           <button className='header__button'
                            onClick={() => navigate(PRACTICE_ROUTE)}>Практика</button>
                            <button className='header__button'
                            onClick={() => navigate(SOLUTIONS_ROUTE)}>Мои решения</button>
                              <button className='header__button'
                            onClick={() => navigate(ROOM_ROUTE)}>Чат</button>
            </Nav>
             
           </>
           ||
           user._user.role === 'ADMIN' &&
            <>
            <Nav className="me-auto" >
              <button className='header__button'
                            onClick={() => navigate(ADMIN_ROUTE)}>Новый преподаватель</button>
                          
            </Nav>
           
           </>
           ||
           user._user.role === 'TEACHER' &&
            <>
            <Nav className="me-auto" >
              <button className='header__button'
                            onClick={() => navigate(GROUPS_ROUTE)}>Список групп</button>
              <button className='header__button'
                            onClick={() => navigate(TEACHER_ROUTE)}>Список студентов</button>
              <button className='header__button'
                            onClick={() => navigate(TASKS_ROUTE)}>Список заданий</button>
              <button className='header__button'
                            onClick={() => navigate(SOLUTIONS_ROUTE)}>Решения</button>
                              <button className='header__button'
                            onClick={() => navigate(ROOM_ROUTE)}>Чат</button>
                             
            </Nav>
             
           </>
           :
           <></>
          }
           
             
             
          </Navbar.Collapse>
          {user.isAuth ?
                <div className="mx-auto d-grid gap-2 d-md-flex justify-content-md-end">
            {checkUser(user) ? <div className="email" style={{margin: '5px 0px', fontSize: '20px', color: '#FFD700'}}>{checkUser(user)}</div> : <div className="email" ></div>
}<BtnDarkMode margin="5px 20px" />

              <Button variant="outline-light" onClick={() => logOut()}>Выйти</Button>
              </div>
:

<div className="mx-auto d-grid gap-2 d-md-flex justify-content-md-end">

<Button  variant="outline-light" onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
<BtnDarkMode margin="5px 20px" />
                </div>
              }
        </Container>
      </Navbar>
      </>
    );
  })
export default Header