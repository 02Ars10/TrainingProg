import ace from "react-ace";
import $ from 'jQuery'
    var code;
    
  const tt=  $(function()  {
        code = ace.edit("code");                      // создаем редактор из элемента с id="code"
        code.setTheme("ace/theme/textmate");          // выбираем тему оформления для подсветки синтаксиса
        code.getSession().setMode("ace/mode/c_cpp");  // говорим что код надо подсвечивать как C++ код
        code.setShowPrintMargin(false);               // опционально: убираем вертикальную границу в 80 сиволов
        code.setOptions({
            maxLines: Infinity,                       // опционально: масштабировать редактор вертикально по размеру кода
            fontSize: "12pt",                         // опционально: размер шрифта ставим побольше
        });
        code.$blockScrolling = Infinity;              // отключаем устаревшие, не поддерживаемые фишки редактора
    });
   
   export default tt