import React  from 'react'
import '../assets/Home.css'
import '../assets/Test.css' //Подключаем стили для файла
import logo from '../assets/logo2.png' //Подключаем картинку на заднем фоне


<Test></Test> //Подключаем то что завернуто в функции Test
function Test () {
    return (
        // Тело странички
      <body className='body2'>
        <div className='extra'>
            <p>Баллы 🪙: 0</p>   
            <p>Оставшееся время 🕓: 10 минут 55 секунд</p>     
        </div>
        <img src={logo} />
        <div className='exer'>
            <div className="task">
                <h1>Задание 2:</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, beatae! Et nihil laborum repellat maiores voluptatum quisquam sint, ea explicabo cumque? Deleniti adipisci expedita officiis dignissimos consequuntur rem a doloremque?</p>
            </div>
            <div className="solution">
                <h1>Решение:</h1>
                <textarea placeholder='Введите решение...' id="" cols="50" rows="10"></textarea>
                <p className='code_count'>1 <br /> 2 <br /> 3 <br /> 4 <br /> 5</p>
                <button>Отправить</button>
            </div>
        </div>
        
        <div className="direction">
                <a href="!#"><div className="sign1"></div></a>
                <p>Задание 2</p>
                <a href="!#"><div className="sign2"></div></a>
            </div>
        </body>
    )
  }
export default Test 