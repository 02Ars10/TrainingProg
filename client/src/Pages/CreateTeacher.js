
import {Container, Form, Card, Button} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from '../utils/consts'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import {addTeacher} from '../http/userApi'
import { observer } from 'mobx-react-lite';
import {Context} from '../index'


const CreateTeacher = observer( () => {
  
const{user} = useContext(Context)
  const location = useLocation()
  const isLogin=location.pathname === LOGIN_ROUTE
const history = useNavigate()
const click = async () => {
  try {
    let data;
      data = await addTeacher(email.value,password.value)

  }
   catch (e) {
alert(e.response.data.message)
  }
}
const [isEmpty,setEmpty] = useState(true)
const [minLengthError,setMinLengthError] = useState(false)
const [maxLengthError,setMaxLengthError] = useState(false)
const [emailError,setEmailError] = useState(false)

const useValidation = (value,validations) => {
  useEffect(()=>{
    for (const validation in validations) {
switch(validation) {
  case 'minLength':
value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
  break;
  case 'isEmpty':
value ? setEmpty(false) : setEmpty(true)
  break;
  case 'MaxLength':
    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
      break;
      case 'isEmail':
        const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break;
}
    }
  },[value])
  return {
    isEmpty, minLengthError, emailError, maxLengthError
  }
}


const useInput = (initialValue, validations) => {
  const [value,setValue] = useState(initialValue)
  const [isDirty,setDirty] = useState(false)
const valid = useValidation(value, validations)
  const onChange = (e) => {
    setValue(e.target.value)
  } 
  const onBlur = (e) => {
    setDirty(true)
  } 
  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}
const email=useInput('',{isEmpty:true, minLength:3, isEmail:true})
const password=useInput('',{isEmpty:true, minLength:8, MaxLength:14})
  return (
    <Container 
    className='d-flex justify-content-center align-items-center' 
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width:600}} className='p-5'>
        <h2 className='m-auto'>Созать преподавателя</h2>
      <Form className='d-flex flex-column'>
       {(email.isDirty && email.isEmpty)&& <div style={{color:'red'}}>Поле не может быть пустым</div>}
       {(email.isDirty && email.minLengthError)&& <div style={{color:'red'}}>Неккоректная длина</div>}
       {(email.isDirty && email.emailError)&& <div style={{color:'red'}}>Неккоректный email</div>}
        <Form.Control onChange={e=>email.onChange(e)} onBlur={e=>email.onBlur(e)} type='text' value={email.value} name='email' placeholder='Введите email...' className='mt-3'>

        </Form.Control>
        {(password.isDirty && password.isEmpty)&& <div style={{color:'red'}}>Поле не может быть пустым</div>}
       {(password.isDirty && password.minLengthError)&& <div style={{color:'red'}}>Неккоректная длина</div>}
       {(password.isDirty && password.maxLengthError)&& <div style={{color:'red'}}>Слишком длинный пароль</div>}
        <Form.Control onChange={e=>password.onChange(e)} onBlur={e=>password.onBlur(e)} type='password' value={password.value} name='password' placeholder='Введите пароль...' className='mt-3'>

</Form.Control>
<Form className='d-flex justify-content-between mt-3 pl-3 pr-3'>
<Button  onClick={click}  variant={'outline-success'}>
    Добавить
</Button>
</Form>
        </Form>
      </Card>
    
    </Container>
  )
}
)
export default CreateTeacher

