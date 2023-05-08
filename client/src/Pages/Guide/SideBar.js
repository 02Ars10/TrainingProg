import React from "react";

import SideBarItem from "./SideBarItem";
import { p11_ROUTE, p12_ROUTE } from "../../utils/consts";
export default function SideBar() {
  const mask = [
    {
      name: "Глава 1. Введение в С++",
      nameItem: [
        { name: "Язык программирования С++", path: p11_ROUTE },
        {
          name: "Первая программа на Windows. Компилятор g++",
          path: p12_ROUTE,
        },
        { name: "Первая программа на Windows. Компилятор Clang" },
        { name: "Первая программа на Linux. Компилятор g++" },
        { name: "Первая программа на MacOS. Компилятор Clang" },
      ],
    },
    {
      name: "Глава 2. Основы языка программирования C++",
      nameItem: [
        { name: "Структура программы" },
        { name: "Переменные" },
        { name: "Типы данных" },
        { name: "Константы" },
        { name: "Ввод и вывод в консоли" },
        {
          name: "using. Подключение пространств имен и определение псевдонимов",
        },
        { name: "Арифметические операции" },
        { name: "Статическая типизация и преобразования типов" },
        { name: "Поразрядные операции" },
        { name: "Операции присваивания" },
        { name: "Условные выражения" },
        { name: "Конструкция if-else и тернарный оператор" },
        { name: "Конструкция switch-case" },
        { name: "Циклы" },
        { name: "Ссылки" },
        { name: "Массивы" },
        { name: "Многомерные массивы" },
        { name: "Массивы символов" },
        { name: "Введение в строки" },
      ],
    },
  ];

  return (
    <div class="item left">
      <ul id="browser" class="filetree">
        {mask.map((item) => (
          <SideBarItem item={item} />
        ))}

        {/* <li class="closed"><span class="folder">Глава 2. Основы языка программирования C++</span>
       <ul>
           <li><span class="file"><a>Структура программы</a></span></li>
           <li><span class="file"><a>Переменные</a></span></li>
           <li><span class="file"><a>Типы данных</a></span></li>
           <li><span class="file"><a>Константы</a></span></li>
           <li><span class="file"><a >Ввод и вывод в консоли</a></span></li>
           <li><span class="file"><a >using. Подключение пространств имен и определение псевдонимов</a></span></li>
           <li><span class="file"><a >Арифметические операции</a></span></li>
           <li><span class="file"><a >Статическая типизация и преобразования типов</a></span></li>
           <li><span class="file"><a >Поразрядные операции</a></span></li>
           <li><span class="file"><a >Операции присваивания</a></span></li>
           <li><span class="file"><a >Условные выражения</a></span></li>
           <li><span class="file"><a >Конструкция if-else и тернарный оператор</a></span></li>
           <li><span class="file"><a >Конструкция switch-case</a></span></li>
           <li><span class="file"><a >Циклы</a></span></li>
           <li><span class="file"><a >Ссылки</a></span></li>
           <li><span class="file"><a >Массивы</a></span></li>
           <li><span class="file"><a >Многомерные массивы</a></span></li>
           <li><span class="file"><a >Массивы символов</a></span></li>
           <li><span class="file"><a >Введение в строки</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 3. Указатели</span>
       <ul>
           <li><span class="file"><a >Что такое указатели</a></span></li>
           <li><span class="file"><a>Операции с указателями</a></span></li>
           <li><span class="file"><a >Арифметика указателей</a></span></li>
           <li><span class="file"><a>Константы и указатели</a></span></li>
           <li><span class="file"><a>Указатели и массивы</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 4. Функции</span>
       <ul>
           <li><span class="file"><a >Определение и объявление функций</a></span></li>
           <li><span class="file"><a >Область видимости объектов</a></span></li>
           <li><span class="file"><a >Параметры функции</a></span></li>
           <li><span class="file"><a >Передача аргументов по значению и по ссылке</a></span></li>
           <li><span class="file"><a >Константные параметры</a></span></li>
           <li><span class="file"><a >Оператор return и возвращение результата</a></span></li>
           <li><span class="file"><a >Указатели в параметрах функции</a></span></li>
           <li><span class="file"><a >Массивы в параметрах функции</a></span></li>
           <li><span class="file"><a >Параметры функции main</a></span></li>
           <li><span class="file"><a >Возвращение указателей и ссылок</a></span></li>
           <li><span class="file"><a >Перегрузка функций</a></span></li>
           <li><span class="file"><a >Рекурсивные функции</a></span></li>
           <li><span class="file"><a >Рекурсия на примере быстрой сортировки</a></span></li>
           <li><span class="file"><a >Указатели на функции</a></span></li>
           <li><span class="file"><a >Указатели на функции как параметры</a></span></li>
           <li><span class="file"><a >Указатель на функцию как возвращаемое значение</a></span></li>
           <li><span class="file"><a >Разделение программы на файлы</a></span></li>
           <li><span class="file"><a >Внешние объекты</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 5. Динамическая память и smart-указатели</span>
       <ul>
           <li><span class="file"><a >Динамические объекты</a></span></li>
           <li><span class="file"><a >Динамические массивы</a></span></li>
           <li><span class="file"><a >unique_ptr&lt;T&gt;</a></span></li>
           <li><span class="file"><a >shared_ptr&lt;T&gt;</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 6. Объектно-ориентированное программирование</span>
       <ul>
           <li><span class="file"><a >Определение классов</a></span></li>
           <li><span class="file"><a >Конструкторы и инициализация объектов</a></span></li>
           <li><span class="file"><a >Управление доступом. Инкапсуляция</a></span></li>
           <li><span class="file"><a >Объявление и определение функций класса</a></span></li>
           <li><span class="file"><a >Конструктор копирования</a></span></li>
           <li><span class="file"><a >Дружественные функции и классы</a></span></li>
           <li><span class="file"><a >Ключевое слово this</a></span></li>
           <li><span class="file"><a >Статические члены класса</a></span></li>
           <li><span class="file"><a >Структуры</a></span></li>
           <li><span class="file"><a >Перечисления</a></span></li>
           <li><span class="file"><a >Наследование</a></span></li>
           <li><span class="file"><a >Виртуальные функции и их переопределение</a></span></li>
           <li><span class="file"><a >Абстрактные классы</a></span></li>
           <li><span class="file"><a >Деструктор</a></span></li>
           <li><span class="file"><a >Перегрузка операторов</a></span></li>
           <li><span class="file"><a >Операторы преобразования типов</a></span></li>
           <li><span class="file"><a >Пространства имен</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 7. Исключения</span>
       <ul>
           <li><span class="file"><a >Обработка исключений</a></span></li>
           <li><span class="file"><a >Тип exception</a></span></li>
           <li><span class="file"><a >Типы исключений</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 8. Последовательные контейнеры</span>
       <ul>
           <li><span class="file"><a >Типы последовательных контейнеров</a></span></li>
           <li><span class="file"><a >Вектор</a></span></li>
           <li><span class="file"><a >Итераторы</a></span></li>
           <li><span class="file"><a >Операции с векторами</a></span></li>
           <li><span class="file"><a >Array</a></span></li>
           <li><span class="file"><a >List</a></span></li>
           <li><span class="file"><a >Forward_list</a></span></li>
           <li><span class="file"><a >Deque</a></span></li>
           <li><span class="file"><a >Span</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 9. Потоки и система ввода-вывода</span>
       <ul>
           <li><span class="file"><a >Базовые типы для работы с потоками</a></span></li>
           <li><span class="file"><a >Файловые потоки. Открытие и закрытие</a></span></li>
           <li><span class="file"><a >Чтение и запись текстовых файлов</a></span></li>
           <li><span class="file"><a >Переопределение операторов ввода и вывода</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 10. Шаблоны</span>
       <ul>
           <li><span class="file"><a >Шаблон класса</a></span></li>
           <li><span class="file"><a >Шаблоны функций</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 11. Строки</span>
       <ul>
           <li><span class="file"><a >Определение строк</a></span></li>
           <li><span class="file"><a >Строки с поддержкой Unicode</a></span></li>
           <li><span class="file"><a>Преобразование типов и строки</a></span></li>
           <li><span class="file"><a>Сравнение строк</a></span></li>
           <li><span class="file"><a>Получение подстроки и проверка начала и конца строки</a></span></li>
           <li><span class="file"><a>Поиск подстроки</a></span></li>
           <li><span class="file"><a>Изменение строки</a></span></li>
           <li><span class="file"><a>Операции с символами</a></span></li>
           <li><span class="file"><a>Программа подсчета слов</a></span></li>
           <li><span class="file"><a>Тип std:string_view</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 12. Стандартная библиотека C++</span>
       <ul>
           <li><span class="file"><a >Математические константы и операции</a></span></li>
           <li><span class="file"><a >Форматирование строк и функция format</a></span></li>
           <li><span class="file"><a >std::optional&lt;T&gt;</a></span></li>
       </ul>
   </li>
   <li class="closed"><span class="folder">Глава 13. Среды разработки</span>
       <ul>
           <li><span class="file"><a >Первая программа в Visual Studio</a></span></li>
           <li><span class="file"><a >Первая программа в Qt Creator</a></span></li>
       </ul>
   </li> */}
      </ul>{" "}
    </div>
  );
}
