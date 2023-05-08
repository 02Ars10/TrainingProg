import React from 'react'
import { useNavigate } from 'react-router';
import './style42.css'

import SideBar from './SideBar';
import { p12_ROUTE, p11_ROUTE } from '../../utils/consts'

export default function Guide() {
	const navigate = useNavigate();
	

	return (
	
		
		
		
		<div id="header">
				

				<SideBar />


	
	   <div class="item center menC">
	
		 <h1 class="zagolovok">Руководство по языку программирования C++</h1>
	
		<ol class="content">
	<li><p><button onClick={() => navigate(p11_ROUTE)} className='button__punkt' >Глава 1. Введение в C++</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt' onClick={() => navigate(p11_ROUTE)}>Язык программирования C++</button></p></li>
			<li><p><button className='button__punkt'  onClick={() => navigate(p12_ROUTE)}>Первая программа на Windows. Компилятор g++</button></p></li>
			<li><p><button className='button__punkt'>Первая программа на Windows. Компилятор Clang</button></p></li>
			<li><p><button className='button__punkt'>Первая программа на Linux. Компилятор g++</button></p></li>
			<li><p><button className='button__punkt'>Первая программа на MacOS. Компилятор Clang</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 2. Основы языка программирования C++</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Структура программы</button></p></li>
			<li><p><button className='button__punkt'>Переменные</button></p></li>
			<li><p><button className='button__punkt'>Типы данных</button></p></li>
			<li><p><button className='button__punkt'>Константы</button></p></li>
			<li><p><button className='button__punkt'>Ввод и вывод в консоли</button></p></li>
			<li><p><button className='button__punkt'>using. Подключение пространств имен и определение псевдонимов</button></p></li>
			<li><p><button className='button__punkt'>Арифметические операции</button></p></li>
			<li><p><button className='button__punkt'>Статическая типизация и преобразования типов</button></p></li>
			<li><p><button className='button__punkt'>Поразрядные операции</button></p></li>
			<li><p><button className='button__punkt'>Операции присваивания</button></p></li>
			<li><p><button className='button__punkt'>Условные выражения</button></p></li>
			<li><p><button className='button__punkt'>Конструкция if-else и тернарный оператор</button></p></li>
			<li><p><button className='button__punkt'>Конструкция switch</button></p></li>
			<li><p><button className='button__punkt'>Циклы</button></p></li>
			<li><p><button className='button__punkt'>Ссылки</button></p></li>
			<li><p><button className='button__punkt'>Массивы</button></p></li>
			<li><p><button className='button__punkt'>Многомерные массивы</button></p></li>
			<li><p><button className='button__punkt'>Массивы символов</button></p></li>
			<li><p><button className='button__punkt'>Введение в строки</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 3. Указатели</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Что такое указатели</button></p></li>
			<li><p><button className='button__punkt'>Операции с указателями</button></p></li>
			<li><p><button className='button__punkt'>Арифметика указателей</button></p></li>
			<li><p><button className='button__punkt'>Константы и указатели</button></p></li>
			<li><p><button className='button__punkt'>Указатели и массивы</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 4. Функции</button></p></li>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Определение и объявление функций</button></p></li>
			<li><p><button className='button__punkt'>Область видимости объектов</button></p></li>
			<li><p><button className='button__punkt'>Параметры функции</button></p></li>
			<li><p><button className='button__punkt'>Передача аргументов по значению и по ссылке</button ></p></li>
			<li><p><button className='button__punkt'>Константные параметры</button ></p></li>
			<li><p><button className='button__punkt'>Оператор return и возвращение результата</button ></p></li>
			<li><p><button className='button__punkt'>Указатели в параметрах функции</button ></p></li>
			<li><p><button className='button__punkt'>Массивы в параметрах функции</button ></p></li>
			<li><p><button className='button__punkt'>Параметры функции mbuttonin</button ></p></li>
			<li><p><button className='button__punkt'>Возвращение указателей и ссылок</button ></p></li>
			<li><p><button className='button__punkt'>Перегрузка функций</button ></p></li>
			<li><p><button className='button__punkt'>Рекурсивные функции</button ></p></li>
			<li><p><button className='button__punkt'>Рекурсия на примере быстрой сортировки</button ></p></li>
			<li><p><button className='button__punkt'>Указатели на функции</button ></p></li>
			<li><p><button className='button__punkt'>Указатели на функции как параметры</button ></p></li>
			<li><p><button className='button__punkt'>Указатель на функцию как возвращаемое значение</button ></p></li>
			<li><p><button className='button__punkt'>Разделение программы на файлы</button ></p></li>
			<li><p><button className='button__punkt'>Внешние объекты</button ></p></li>
		</ol>
	
	<li><p><button className='button__punkt'>Глава 5. Динамическая память и smbuttonrt-указатели</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Динамические объекты</button></p></li>
			<li><p><button className='button__punkt'>Динамические массивы</button></p></li>
			<li><p><button className='button__punkt'>unique_ptr&lt;T&gt;</button></p></li>
			<li><p><button className='button__punkt'>shbuttonred_ptr&lt;T&gt;</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 6. Объектно-ориентированное программирование</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Определение классов</button></p></li>
			<li><p><button className='button__punkt'>Конструкторы и инициализация объектов</button></p></li>
			<li><p><button className='button__punkt'>Управление доступом. Инкапсуляция</button></p></li>
			<li><p><button className='button__punkt'>Объявление и определение функций класса</button></p></li>
			<li><p><button className='button__punkt'>Конструктор копирования</button></p></li>
			<li><p><button className='button__punkt'>Дружественные функции и классы</button></p></li>
			<li><p><button className='button__punkt'>Ключевое слово this</button></p></li>
			<li><p><button className='button__punkt'>Статические члены класса</button></p></li>
			<li><p><button className='button__punkt'>Структуры</button></p></li>
			<li><p><button className='button__punkt'>Перечисления</button></p></li>
			<li><p><button className='button__punkt'>Наследование</button></p></li>
			<li><p><button className='button__punkt'>Виртуальные функции и их переопределение</button></p></li>
			<li><p><button className='button__punkt'>Абстрактные классы</button></p></li>
			<li><p><button className='button__punkt'>Деструктор</button></p></li>
			<li><p><button className='button__punkt'>Перегрузка операторов</button></p></li>
			<li><p><button className='button__punkt'>Операторы преобразования типов</button></p></li>
			<li><p><button className='button__punkt'>Пространства имен</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 7. Исключения</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Обработка исключений</button></p></li>
			<li><p><button className='button__punkt'>Тип exception</button></p></li>
			<li><p><button className='button__punkt'>Типы исключений</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 8. Последовательные контейнеры</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Типы последовательных контейнеров</button></p></li>
			<li><p><button className='button__punkt'>Вектор</button></p></li>
			<li><p><button className='button__punkt'>Итераторы</button></p></li>
			<li><p><button className='button__punkt'>Операции с векторами</button></p></li>
			<li><p><button className='button__punkt'>buttonrrbuttony</button></p></li>
			<li><p><button className='button__punkt'>List</button></p></li>
			<li><p><button className='button__punkt'>Forwbuttonrd_list</button></p></li>
			<li><p><button className='button__punkt'>Deque</button></p></li>
			<li><p><button className='button__punkt'>Spbuttonn</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 9. Потоки и система ввода-вывода</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Базовые типы для работы с потоками</button></p></li>
			<li><p><button className='button__punkt'>Файловые потоки. Открытие и закрытие</button></p></li>
			<li><p><button className='button__punkt'>Чтение и запись текстовых файлов</button></p></li>
			<li><p><button className='button__punkt'>Переопределение операторов ввода и вывода</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 10. Шаблоны</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Шаблон класса</button></p></li>
			<li><p><button className='button__punkt'>Шаблоны функций</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 11. Строки</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Определение строк</button></p></li>
			<li><p><button className='button__punkt'>Строки с поддержкой Unicode</button></p></li>
			<li><p><button className='button__punkt'>Преобразование типов и строки</button></p></li>
			<li><p><button className='button__punkt'>Сравнение строк</button></p></li>
			<li><p><button className='button__punkt'>Получение подстроки и проверка начала и конца строки</button></p></li>
			<li><p><button className='button__punkt'>Поиск подстроки</button></p></li>
			<li><p><button className='button__punkt'>Изменение строки</button></p></li>
			<li><p><button className='button__punkt'>Операции с символами</button></p></li>
			<li><p><button className='button__punkt'>Программа подсчета слов</button></p></li>
			<li><p><button className='button__punkt'>Тип std:string_view</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 12. Стандартная библиотека C++</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Математические константы и операции</button></p></li>
			<li><p><button className='button__punkt'>Форматирование строк и функция formbuttont</button></p></li>
			<li><p><button className='button__punkt'>std::optionbuttonl&lt;T&gt;</button></p></li>
		</ol>
	</li>
	<li><p><button className='button__punkt'>Глава 13. Среды разработки</button></p>
		<ol class="subsubcontent">
			<li><p><button className='button__punkt'>Первая программа в Visubuttonl Studio</button></p></li>
			<li><p><button className='button__punkt'>Первая программа в Qt Crebuttontor</button></p></li>
		</ol>
	</li>
	</ol>
	
	
		
		
	
		
		<div id="disqus_thread" ></div>
	
		
	
	  </div>
	

	</div>
	
		
	
		 
	

  )
}
