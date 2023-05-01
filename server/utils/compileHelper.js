const subProcess = require('child_process')
const fs = require('fs');


exports.compileFile = () => {
    //nodeJS использует терминал для запуска команды компиляции
    return new Promise(async (resolve, reject) => {
        //Все ../app/ - для докера, если нужно запустить локально - удалить
        //"g++ programs/test_file_cpp.cpp -o programs/compiled"  с помощью этой команды мы можем из файла cpp создать запускаемый файл .exe
        subProcess.exec('g++ programs/test_file_cpp.cpp -o ../app/programs/compiled.exe',
            (err, stdout, stderr) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`${stdout.toString()}\n${stderr.toString()}`)
                }
            })
    })
}

exports.writeToFile = async (data) => {
    // Здесь происходит запись с++ кода на "programs/test_file_cpp.cpp"
    return new Promise(async (resolve, reject) => {   //используем Promise функций чтобы они  работали последовательно
        fs.writeFile('../app/programs/test_file_cpp.cpp', data, err => {
            if (err) {
                reject(err)    //reject возвращает ошибку
            }
            resolve(true)  // resolve возвращает успешную выполнению
            // file written successfully
        });
    }).catch(console.log)
}
exports.writeToInput = (data) => {
    //Здесь происходит запись входного набора данных в "programs/input_cpp.txt"
    return new Promise(async (resolve, reject) => {
        fs.writeFile('../app/programs/input_cpp.txt', data, err => {
            if (err) {
                reject(err)
            }
            resolve(true)
            // file written successfully
        });
    }).catch(console.log)
}

exports.runCompiledFile = () => {
    //Здесь также используется терминал для запуска
    // .exe файла и  входа данных.
    return new Promise(async (resolve, reject) => {
        subProcess.exec('../app/programs/compiled.exe < ../app/programs/input_cpp.txt', (err, stdout, stderr) => {
            if (err) {
                console.log(err)
                reject(err)
                process.exit(1)
            } else {
                // console.log(stdout.toString())
                resolve(`${stdout.toString()}  ${stderr.toString()}`)
            }
        })
    })
}