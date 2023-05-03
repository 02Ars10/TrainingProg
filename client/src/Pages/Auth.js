
import React, {useContext, useState} from 'react';
import {Container, Form, Card, Button, Alert} from 'react-bootstrap'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "../utils/consts";
import {registration, login, checkUserByEmail} from '../http/userApi'
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const click = async () => {
        try {
            setError("") // Clear previous error messages
            if (!email || !password) {
                setError("Пожалуйста, заполните все поля")
                return;
            }
    
            if (!/\S+@\S+\.\S+/.test(email)) {
                setError("Пожалуйста, введите корректный email")
                return;
            }
    
            if (password.length < 6) {
                setError("Пароль должен содержать не менее 6 символов")
                return;
            }
            const userData = await checkUserByEmail(email);
            if (!userData) {
                setError("Пользователь с таким email не найден");
                return;
            }
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            history(HOME_ROUTE)
        } catch (e) {
            if (e.response && e.response.status === 401) {
                setError("Неправильный логин или пароль");
            } else if (e.response && e.response.data) {
                setError(e.response.data.message || "Неправильный логин или пароль");
            } else {
                setError("Неправильный логин или пароль");
            }
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink style={{textDecoration:'none'}} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink style={{textDecoration:'none'}} to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Form>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;