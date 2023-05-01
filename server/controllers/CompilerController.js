const { json } = require("body-parser")
const {
    writeToFile,
    writeToInput,
    compileFile,
    runCompiledFile
} = require("../utils/compileHelper")    //Все функции были импортированы из вспомогательного файла «utils/compileHelper.js».

class CompilerController {
    async compile(req, res) {
        // console.log(req.body.program)
        await writeToFile(req.body.program)      //функция для написания кода C++ "programs/test_file_cpp.cpp"
            .then(data => {
                return writeToInput(req.body.input)  //функция записи входного набора данных в "programs/input cpp.txt"
            })
            .then(data => {
                return compileFile()   //функция для компиляции "programs/test_file_cpp.cpp" в файл compiled.exe (запускаемый файл для Windows)
            })
            .then(data => {
                return runCompiledFile()  //функция для запуска "programs/compiled.exe" с входным набором данных из "programs/input_cpp.txt"
            })
            .then(data => {
                res.status(200).json({   //
                    success: true,
                    output: data,    //Ответ API после успешной компиляции и запуска. Вот "output" из выполненной работы
                    error: null
                })
            })
            .catch(err => {         //Если в одной функций появится ошибка то последующие работы не будет выполнены
                                    // и программа овтамотически передёт на "catch" блог и будет  возвращат ошибку
                console.log(err)
                res.status(400).json({    //Ответ API после неудачной компиляции или после сбоя завершения.
                    success: false,
                    error: err.toString()
                })
            })
    }
}

module.exports = new CompilerController()