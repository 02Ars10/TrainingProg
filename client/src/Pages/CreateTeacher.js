import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from '../utils/consts';
import { addTeacher } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import PasswordStrengthBar from 'react-password-strength-bar';
import zxcvbn from 'zxcvbn';
import '../assets/Auth.css';

const CreateTeacher = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_2, setPassword_2] = useState('');

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [score, setScore] = useState(0);

  const generatePassword = () => {
    const length = Math.floor(Math.random() * 8) + 10;
    const charset =
      'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let newPassword = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(newPassword);
    setShowPassword(false);
  };

  const click = async () => {
    
    try {
      setError(''); // Clear previous error messages
      if (!email || !password) {
        setError('Пожалуйста, заполните все поля');
        return;
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setError('Пожалуйста, введите корректный email');
        return;
      }

      
        if (password !== password_2) {
          setError('Пароли не совпадают');
          return;
        }
      
      if (password.length < 6) {
        setError('Пароль должен содержать не менее 6 символов');
        return;
      }
      let data = await addTeacher(email,password);
      
      if (data) {
        setSuccessMessage('Преподаватель успешно добавлен');
      } else {
        setError('Ошибка регистрации пользователя');
      }
    } catch (e) {
      setError(e.message || 'Что-то пошло не так');
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto" style={{ color: "black" }}>
          Создать аккаунт преподавателю
        </h2>
        <input
          className="input__auth mt-3"
          placeholder="Введите email преподавателя..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
       
          <div>
            <input
              className="input__auth mt-3"
              placeholder="Введите пароль преподавателя..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
            />
            <PasswordStrengthBar password={password} score={score} />
          </div>
        
       
          <input
            className="input__auth mt-3"
            placeholder="Повторите пароль преподавателя..."
            value={password_2}
            onChange={(e) => setPassword_2(e.target.value)}
            type="password"
            style={{ margin: "20px 0px" }}
          />
    
        <div style={{ display: "flex", justifyContent: "space-between" }}>
         
            <Button
              variant="secondary"
              style={{
                padding: showPassword ? "10px 59.5px" : "10px 53px",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Скрыть пароль" : "Показать пароль"}
            </Button>
        
            <Button
              variant="secondary"
              style={{ padding: "10px 50px" }}
              onClick={generatePassword}
            >
              Сгенерировать пароль
            </Button>
          
        </div>
        <Button  onClick={click}  variant={'outline-success'}>
    Добавить
</Button>
{error && <Alert variant="danger" className="mt-3">{error}</Alert>}
{successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
      </Card>
    </Container>
  );
          }
)
          
export default CreateTeacher