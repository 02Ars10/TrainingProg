import React from 'react'
import { p12_ROUTE } from '../../../utils/consts'
import { GUIDE_ROUTE } from '../../../utils/consts'
import img1 from '../Img/compilers.png'
import SideBar from '../SideBar'
import {Link} from "react-router-dom"
export default function p11() {
  var scrollNode = () => {document.getElementById('navigationScroll')
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
  return (
    <div id="header">
				

				<SideBar />   
       <div class="item center menC">
         <h1>Введение в C++</h1><h2>Язык программирования C++</h2>
      <p>Язык программирования С++ представляет высокоуровневый компилируемый язык программирования общего назначения со статической типизацией, который подходит 
    для создания самых различных приложений. На сегодняшний день С++ является одним из самых популярных и распространенных языков.</p>
    <p>Своими корнями он уходит в язык Си, который был разработан в 1969—1973 годах в компании Bell Labs программистом Деннисом Ритчи (Dennis Ritchie). 
    В начале 1980-х годов датский программист Бьерн Страуструп (Bjarne Stroustrup), который в то время работал в компании Bell Labs, разработал С++ как расширение 
    к языку Си. Фактически вначале C++ просто дополнял язык Си некоторыми возможностями объектно-ориентированного программирования. И поэтому сам Страуструп вначале называл его 
    как "C with classes" ("Си с классами").</p>
    <p>Впоследствии новый язык стал набирать популярность. В него были добавлены новые возможности, которые делали его не просто дополнением к Си, а совершенно новым языком программирования. 
    В итоге "Си с классами" был переименован в С++. И с тех по оба языка стали развиваться независимо друг от друга.</p>
    <p>Текущий стандарт языка можно найти по ссылке <a href="https://eel.is/c++draft/" rel="nofollow">https://eel.is/c++draft/</a></p>
    <p>С++ является мощным языком, унаследовав от Си богатые возможности по работе с памятью. Поэтому нередко С++ находит свое применение в системном программировании, в частности, при создании операционных систем, драйверов, различных утилит, 
    антивирусов и т.д. К слову сказать, ОС Windows большей частью написана на С++. Но только системным программированием применение данного языка не 
    ограничивается. С++ можно использовать в программах любого уровня, где важны скорость работы и 
    производительность. Нередко он применяется для создания графических приложений, различных прикладных программ. Также особенно часто его используют для создания игр с 
    богатой насыщенной визуализацией. Кроме того, в последнее время набирает ход мобильное направление, где С++ тоже нашел свое применение. И даже в веб-разработке 
    также можно использовать С++ для создания веб-приложений или каких-то вспомогательных сервисов, которые обслуживают веб-приложения. В общем С++ - язык широкого пользования, на котором можно создавать практически любые виды программ.</p>
    <p>С++ является компилируемым языком, а это значит, что компилятор транслирует исходный код на С++ в исполняемый файл, который содержит набор 
    машинных инструкций. Но разные платформы имеют свои особенности, поэтому скомпилированные программы нельзя просто перенести с одной платформы на 
    другую и там уже запустить. Однако на уровне исходного кода программы на С++ по большей степени обладают переносимостью, если не используются какие-то специфичные для текущей ос функции.
    А наличие компиляторов, библиотек и инструментов разработки почти под все распространенные платформы позволяет компилировать один и тот же 
    исходный код на С++ в приложения под эти платформы.</p>
    <p>В отличие от Си язык C++ позволяет писать приложения в объектно-ориентированном стиле, представляя программу как совокупность взаимодействующих между собой классов и объектов. 
    Что упрощает создание крупных приложений.</p>
    <h3>Основные этапы развития</h3>
    <p>В 1979-80 годах Бьерн Страуструп разработал расширение к языку Си - "Си с классами". В 1983 язык был переименован в С++.</p>
    <p>В 1985 году была выпущена первая коммерческая версия языка С++, а также первое издание книги "Языка программирования C++", 
    которая представляла первое описание этого языка при отсутствии официального стандарта.</p>
    <p>В 1989 была выпущена новая версия языка C++ 2.0, которая включала ряд новых возможностей. После этого язык развивался относительно медленно вплоть до 2011 года. Но при этом 
    в 1998 году была предпринята первая попытка по стандартизации языка организацией ISO (International Organiztion for Standartization). Первый стандарт 
    получил название ISO/IEC 14882:1998 или сокращенно С++98. В дальнейшем в 2003 была издана новая версия стандарта C++03.</p>
    <p>В 2011 году был издан новый стандарт C++11, который содержал множество добавлений и обогащал язык С++ большим числом новых функциональных 
    возможностей. С тех пор было выпущено еще ряд стандартов. На момент написания данной статьи самый последний стандарт - C++20 был опубликован в декабре 2020 года. В 2023 году ожидается 
    выход стандарта C++23</p>
    <h3>Компиляторы и среды разработки</h3>
    <p>Для написания программ на языке С++ как минимум необходимы два компонента: текстовый редактор, с помощью которого можно набрать исходный код, и компилятор, 
    который принимает файл с исходным кодом и компилирует его в исполняемый файл. В качестве текстового редактора можно выбрать любой понравившийся. Я бы посоветовал кросcплатформенный редактор 
    <a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a>, который поддерживает плагины для разных языков, в том числе для C++.</p>
    <p>Если с текстовым редактором относительно просто - можно выбрать любой, то выбор компилятора может действительно 
    стать проблемой. Поскольку в настоящий момент есть очень много различных компиляторов, которые могут отличаться по различным аспектам, в частности, по реализации стандартов. 
    Базовый список компиляторов для С++ можно посмотреть в <a href="https://en.wikipedia.org/wiki/List_of_compilers#C.2B.2B_compilers" rel="nofollow">википедии</a>. 
    А на странице <a href="https://en.cppreference.com/w/cpp/compiler_support" rel="nofollow">https://en.cppreference.com/w/cpp/compiler_support</a> можно ознакомиться с поддержкой компиляторами последних стандартов. 
    В общем случае нередко рекомендуют хотя бы ознакомиться как минимум с тремя основными компиляторами:</p>
    <ul>
    <li><p><span class="b">g++</span> от проекта GNU (в составе набора компиляторов GCC)</p></li>
    <li><p><span class="b">Clang</span> (доступен в рамках проекта LLVM)</p></li>
    <li><p>компилятор C++ от компании Microsoft (используется в Visual Studio)</p></li>
    </ul>
    <p>Так, если обратиться к <a href="https://www.jetbrains.com/lp/devecosystem-2022/cpp/#which-compilers-do-you-regularly-use-" rel="nofollow">опросу разработчиков</a>, проведенному компанией JetBrains s 2022, то доли использования различных компиляторов среди разработчиков распределились следующим образом:</p>
    <img src={img1} alt="Какой компилятор для языка программирования C++ наиболее популярный" /> 
    <li>Далее мы рассмотрим некоторые из них. Но на протяжении всего руководства мы будем ориентироваться прежде всего на компилятор <span class="b">g++</span> (GCC), разработанный в рамках проекта GNU.
    <p>Также для создания программ можно использовать интегрированные среды разработки IDE, такие как Visual Studio, Netbeans, Eclipse, Qt и т.д., которые упрощают создание приложений.</p>
    
    </li>
      <div class="nav__button"><Link className='navigationScroll' ref={scrollNode} to={GUIDE_ROUTE}>Содержание</Link><Link to={p12_ROUTE}>Вперед</Link></div>
      
      </div>
    
      </div>
  )
}
