
import React, {useContext, useState} from 'react';
import {Container, Form, Card, Button, Alert} from 'react-bootstrap'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "../utils/consts";
import {registration, login} from '../http/userApi'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PasswordStrengthBar from 'react-password-strength-bar';
import zxcvbn from 'zxcvbn';
import '../assets/Auth.css'
const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_2, setPassword_2] = useState('')

    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
   
      
      
        const generatePassword = () => {
            const length = Math.floor(Math.random() * 8) + 10;
          const charset = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
          let newPassword = '';
          for (let i = 0, n = charset.length; i < length; ++i) {
            newPassword += charset.charAt(Math.floor(Math.random() * n));
          }
          setPassword(newPassword);
          setShowPassword(false);
        };
        const { score } = zxcvbn(password);
 
    
    const click = async () => {
        try {
            setError("") // Clear previous error messages
            if (!email || !password) {
                setError("Пожалуйста, заполните все поля")
                return;
            }
    
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                setError("Пожалуйста, введите корректный email")
                return;
            }
            if (!isLogin) { 
            if (password !== password_2) {
                setError('Пароли не совпадают')
                return;
            }
            }
            if (password.length < 6) {
                setError("Пароль должен содержать не менее 6 символов")
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
                setError("Что то пошло не так");
            } else if (e.response && e.response.data) {
                setError(e.response.data.message || "Что то пошло не так");
            } else {
                setError("Что то пошло не так");
            }
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto" style={{color:'black'}}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <input
   className="input__auth mt-3"
   placeholder="Введите ваш email..."
   value={email}
   onChange={e => setEmail(e.target.value)}
/>
{ isLogin ? 

<input
   className="input__auth mt-3"
   placeholder="Введите ваш пароль..."
   value={password}
   onChange={e => setPassword(e.target.value)}
   type="password"
/>

:

   
<input
   className="input__auth mt-3"
   placeholder="Введите ваш пароль..."
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   type={showPassword ? 'text' : 'password'}
/>
}
{
isLogin?
<div></div>
:
<PasswordStrengthBar password={password}  score={score}/>
}
 
{ isLogin ? 

<div></div>

:

<input
   className="input__auth mt-3"
   placeholder="Повторите ваш пароль..."
   value={password_2}
   onChange={e => setPassword_2(e.target.value)}
   type="password"
   style={{ margin: '20px 0px' }}
/>

}
<div style={{display: 'flex', justifyContent: 'space-between'}}>
{
isLogin?
<div></div>
:

      <Button variant="secondary" style={{padding: showPassword? '10px 59.5px' : '10px 53px'}} onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
      </Button>

}
{
isLogin?
<div></div>
:
<Button variant="secondary" style={{padding: '10px 50px'}} onClick={generatePassword}>
Сгенерировать пароль
</Button>
}
</div>

                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div style={{color:'black'}}>
                                Нет аккаунта? <NavLink style={{textDecoration:'none'}} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div style={{color:'black'}}    >
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

              
            </Card>
        </Container>
    );
});

export default Auth;