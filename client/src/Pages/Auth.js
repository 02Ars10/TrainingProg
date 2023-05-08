
import React, {useContext, useState} from 'react';
import {Container, Form, Card, Button, Alert} from 'react-bootstrap'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "../utils/consts";
import {registration, login} from '../http/userApi'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PasswordStrengthBar from 'react-password-strength-bar';
import zxcvbn from 'zxcvbn';
const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_2, setPassword_2] = useState('')
    // const [poorPassword, setPoorPassword] = useState(false);
    // const [weakPassword, setWeakPassword] = useState(false);
    // const [strongPassword, setStrongPassword] = useState(false);
    // const [passwordError, setPasswordErr] = useState("");
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    // const passwordStrength= async (evnt)=>{
    //     const passwordValue= evnt.target.value;
    //     const passwordLength= passwordValue.length;
    //     const poorRegExp = /[a-z,а-я,A-Z,А-Я]/;
    //     const weakRegExp = /(?=.*?[0-9])/;;
    //     const strongRegExp = /(?=.*?[#?!@$%^&*-])/;
    //     const whitespaceRegExp = /^$|\s+/;
    //     const poorPassword= poorRegExp.test(passwordValue);
    //     const weakPassword= weakRegExp.test(passwordValue);
    //     const strongPassword= strongRegExp.test(passwordValue);
    //     const whiteSpace= whitespaceRegExp.test(passwordValue);

    //     if(passwordValue===''){
    //         setPasswordErr("Пароль пустой");
    //     }else{
    
    //         // to check whitespace
    //         if(whiteSpace){
    //             setPasswordErr("Пробелы не допускаются");
    //         }
    //         // to check poor password
    //         if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
    //         {
    //         setPoorPassword(true);
    //         setPasswordErr("Пароль слабый");
    //         }
    //         // to check weak password
    //         if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
    //         {
    //             setWeakPassword(true);
    //             setPasswordErr("Пароль недостаточно сложный");
    //         }else{
    //         setWeakPassword(false);
    //         }
    //         // to check strong Password
    //         if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
    //         {
    //             setStrongPassword(true);
    //             setPasswordErr("Пароль надежный");
    //         }else{
    //            setStrongPassword(false);
    //         }
    //     }
    // }
    
      
      
        const generatePassword = () => {
            const length = Math.floor(Math.random() * 8) + 10;
          const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
          let newPassword = '';
          for (let i = 0, n = charset.length; i < length; ++i) {
            newPassword += charset.charAt(Math.floor(Math.random() * n));
          }
          setPassword(newPassword);
          setShowPassword(false);
        };
        const { score } = zxcvbn(password);
    // function StrengthMeter({poorPassword, weakPassword, strongPassword, passwordError}){
    //     return (
    //         <>
    //         <ul className="list-group list-group-horizontal">
               
    //            {poorPassword===true?<li className="list-group-item bg-danger col-4" style={{padding:"1px 0px"}}></li>:''}
    //             {weakPassword===true?<li className="list-group-item bg-warning col-4" style={{padding:"1px 0px"}}></li>:''}
    //             {strongPassword===true?<li className="list-group-item bg-success col-4" style={{padding:"1px 0px"}}></li>:''}
                
    //       </ul>
    //       <p> {passwordError}</p>
    //       </>
          
    //     )
    // }
    
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
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form.Control
   className="mt-3"
   placeholder="Введите ваш email..."
   value={email}
   onChange={e => setEmail(e.target.value)}
/>
{ isLogin ? 

<Form.Control
   className="mt-3"
   placeholder="Введите ваш пароль..."
   value={password}
   onChange={e => setPassword(e.target.value)}
   type="password"
/>

:

   
<Form.Control
   className="mt-3"
   placeholder="Введите ваш пароль..."
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   type={showPassword ? 'text' : 'password'}
/>
}

 <PasswordStrengthBar password={password}  score={score}/>
 
{ isLogin ? 

<div></div>

:

<Form.Control
   className="mt-3"
   placeholder="Повторите ваш пароль..."
   value={password_2}
   onChange={e => setPassword_2(e.target.value)}
   type="password"
/>

}


      <Button variant="secondary" onClick={generatePassword}>
        Сгенерировать пароль
      </Button>
      <Button variant="secondary" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
      </Button>

{/* <StrengthMeter poorPassword={poorPassword} weakPassword={weakPassword} strongPassword={strongPassword} passwordError={passwordError} /> */}
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

              
            </Card>
        </Container>
    );
});

export default Auth;