import React  from 'react'
import '../assets/Home.css'
import vvod from '../assets/vvod.png'
import uslov from '../assets/uslov.png'
import vichislen from '../assets/vichislen.png'
import stroki from '../assets/stroki.png'
import cikli from '../assets/cikli.png'
import spiski from '../assets/spiski.png'
import func from '../assets/func.png'

import { useMemo } from 'react'

function Start () {
  window.location.href = 'test'
}
function Home () {
  const root= useMemo(() => document.querySelector(":root"),[])
  const parallaxHandler = (e) => {
     const x = (e.clientX - window.innerHeight / 2) / 200;
     const y = (e.clientY - window.innerHeight / 2) / 200;
     root.style.setProperty('--posX',-x)
     root.style.setProperty('--posY',-y)
  }
    return (
      
      <body className='body'>
        <div className='hero'>
        <div className='hero__title'></div>
        <span className='title__text'>Учите C++</span>
        <div className='hero__subtitle'>
          Бесплатный курс по программированию с нуля.<br></br>
          Работает прямо в браузере.
        </div>
        <div className='visualisator'></div>
        <div className='advantages'>
          <div className='advantages__item'>
            <div className='advantages__title'>ЛЕГКО НАЧАТЬ</div>
            <div className='advantages__text'>Сайт работает из браузера. Не парьтесь по поводу установки среды разработки, интерпретатора и других сложных штук.</div>
          </div>
          <div className='advantages__item'>
            <div className='advantages__title'>ПО-РУССКИ</div>
            <div className='advantages__text'>Наш сайт полностью на русском языке, что упрощает работу пользователя.</div>
          </div>

          <div className='advantages__item'>
            <div className='advantages__title'>РАЗНООБРАЗНО</div>
            <div className='advantages__text'>Когда вы решите задачу, мы покажем вам другие варианты решения, чтобы вы смогли изучить разные подходы.</div>
          </div>
        </div>
      </div><div className='feature feature__why'>
          <div className='title animate__animated animate__flipInX animate__infinite animate__slower'>Почему C++?</div>
          <div className='text text__feature'>
          C++ – один из самых популярных языков программирования. Он регулярно входит в ТОПы популярности programming language разных аналитических агентств.


          </div>
          <div className='columns'>
            <div className='column'>
              <div className='column__header'>Хорошая основа для изучения других языков программирования. </div>
              <div className='column__text'>Зная C++, вам будет проще освоить другие ЯП. Хотя у него сложный синтаксис, язык является эталонным, на примере которого разработаны более современные ЯП (С#, JavaScript, Java), имеющие более простую структуру.</div>
            </div>
            <div className='column'>
              <div className='column__header'>Универсальность. </div>
              <div className='column__text'>Возможно, этот главный плюс C++. Он кроссплатформенный и подходит для любых целей (не является узкоспециализированным, как другие языки).</div>
            </div>
            <div className='column'>
              <div className='column__header'>Производительность</div>
              <div className='column__text'>Благодаря своей вычислительной мощности язык обеспечивает высокую скорость исполнения кода.</div>
            </div>
          </div>
        </div>

<div className='about'>
<div className='lessons'>
  
  <div className='lessons__wrap animate__animated animate__bounceInLeft animate__infinite animate__slower'> 
  
    <div className='lessons__topic'>
      <img className='topic__img' src={vvod} alt='1' ></img>
      <div className='topic__text'>Ввод-вывод</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={uslov} alt='1' ></img>
      <div className='topic__text'>Условия</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vichislen} alt='1' ></img>
      <div className='topic__text'>Вычисления</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={stroki} alt='1' ></img>
      <div className='topic__text'>Строки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={cikli} alt='1' ></img>
      <div className='topic__text'>Циклы</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={spiski} alt='1' ></img>
      <div className='topic__text'>Списки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={func} alt='1' ></img>
      <div className='topic__text'>Функции</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vvod} alt='1' ></img>
      <div className='topic__text'>Ввод-вывод</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={uslov} alt='1' ></img>
      <div className='topic__text'>Условия</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vichislen} alt='1' ></img>
      <div className='topic__text'>Вычисления</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={stroki} alt='1' ></img>
      <div className='topic__text'>Строки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={cikli} alt='1' ></img>
      <div className='topic__text'>Циклы</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={spiski} alt='1' ></img>
      <div className='topic__text'>Списки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={func} alt='1' ></img>
      <div className='topic__text'>Функции</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vvod} alt='1' ></img>
      <div className='topic__text'>Ввод-вывод</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={uslov} alt='1' ></img>
      <div className='topic__text'>Условия</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vichislen} alt='1' ></img>
      <div className='topic__text'>Вычисления</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={stroki} alt='1' ></img>
      <div className='topic__text'>Строки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={cikli} alt='1' ></img>
      <div className='topic__text'>Циклы</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={spiski} alt='1' ></img>
      <div className='topic__text'>Списки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={func} alt='1' ></img>
      <div className='topic__text'>Функции</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vvod} alt='1' ></img>
      <div className='topic__text'>Ввод-вывод</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={uslov} alt='1' ></img>
      <div className='topic__text'>Условия</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vichislen} alt='1' ></img>
      <div className='topic__text'>Вычисления</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={stroki} alt='1' ></img>
      <div className='topic__text'>Строки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={cikli} alt='1' ></img>
      <div className='topic__text'>Циклы</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={spiski} alt='1' ></img>
      <div className='topic__text'>Списки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={func} alt='1' ></img>
      <div className='topic__text'>Функции</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vvod} alt='1' ></img>
      <div className='topic__text'>Ввод-вывод</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={uslov} alt='1' ></img>
      <div className='topic__text'>Условия</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={vichislen} alt='1' ></img>
      <div className='topic__text'>Вычисления</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={stroki} alt='1' ></img>
      <div className='topic__text'>Строки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={cikli} alt='1' ></img>
      <div className='topic__text'>Циклы</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={spiski} alt='1' ></img>
      <div className='topic__text'>Списки</div>
    </div>
    <div className='lessons__topic'>
      <img className='topic__img' src={func} alt='1' ></img>
      <div className='topic__text'>Функции</div>
    </div>
  </div>
</div>
<h1 className='title__about animate__animated animate__infinite animate__bounce animate__slower'>ONE COURSE TO RULE THEM ALL</h1>
<div className='about__text animate__animated animate__bounceInUp animate__slower'>Проведём вас за руку через основные функции языка, закрепим теорию сотнями задач и пересадим вам мозг программиста.</div>
</div>
<section className='parallax'> 
<div className='parallax__body'>
  <div className='parallax__container _container'>
<div className='parallax__label'>Я готов</div>
<h1 className='parallax__title'>Приступайте к первому уроку и решайте задачи, чтобы покорить все олимпиады, сделать научную работу и стать программистом.</h1>
<button className='parallax__button' onClick={Start}>Приступить</button>
  </div>
  <div className='parallax__images' onMouseMove={parallaxHandler}>
  <div className='.images-parallax__item'>
    <div className='images-parallax__clouds'></div>
  </div>
  <div className='.images-parallax__item'>
    <div className='images-parallax__mountains'></div>
  </div>
  <div className='.images-parallax__item'>
    <div className='images-parallax__human'></div>
  </div>
  </div>
</div>
</section>

        </body>
    
     
    )
  }
export default Home;