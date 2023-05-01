import Editor from "@monaco-editor/react";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import '../assets/Editor.css';

import {useContext, useEffect, useState} from "react";
import { getTasksByGroup } from "../http/taskApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { createSolution } from "../http/solutionsApi";
const Practice = observer(() => {

  const {user} = useContext(Context)
  
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [current, setCurrent] = useState();
  const [isError, setIsError] = useState([])


  const checkGroup = (user) => {
    if (user._user.token) {
      return user._user.token.group
    } else {
      return user._user.group
    }
  }

  const checkUser = (user) => {
    if (user._user.token) {
      return user._user.token.id
    } else {
      return user._user.id
    }
  }

  useEffect(() => {
    getTasksByGroup(checkGroup(user)).then(data => {
      setTasks(data)
      setCurrent(data[0])
  })
  },[])

  const arrayFilter = (array) => {
    const newArray = [] 
    array.map(item => {
      newArray.push(item.filter(el => {return el !== ''}))
    })
    return newArray
  }

  const sendCode = async(code)=>{
    setOutput('')
    console.log(arrayFilter(current.inputs))
    console.log(arrayFilter(current.outputs))
    await axios.post('http://localhost:5000/compiler/compile',{program: code, input:input})
    .then(res => {
      setOutput(res.data.output);
      setError('');
      checkTest(code)
    })
    .catch(err=>{
      setError(err.response.data.error);
      setOutput('');
    })
  }

  const checkTest = async(code) => {
    const arr = []
    const testInput = arrayFilter(current.inputs)
    const testOutput = arrayFilter(current.outputs)
    for (let i = 0; i < testInput.length; i++) {
      await axios.post('http://localhost:5000/compiler/compile',{program: code, input: testInput[i].toString().replace(/,/g, ' ')})
      .then(res => {
        if (res.data.output.toString().replace(/.{0,2}$/, '') !== testOutput[i].toString()) {
          setError(`Ошибка на тесте ${i+1}`)
          arr.push(i+1)
        } else {
          setOutput(`Тест ${i+1} пройден`)
        }
      })
    }
    return arr
  }

  const sendAnswer = async (code) => {
    setOutput('')
    let firstOut
    await axios.post('http://localhost:5000/compiler/compile',{program: code, input:input})
    .then(res => {
      firstOut = res.data.output
      setOutput(res.data.output);
      setError('');
    })
    .catch(err=>{
      setError(err.response.data.error);
      createSolution(current.id, checkUser(user), code, input, err.response.data.error)
    })
    await checkTest(code).then(res => {
      createSolution(current.id, checkUser(user), code, input, firstOut, res)
    }
    )
  }

  const handleEditorChange = (value) => {
    setValue(value);
  };
  const [code, setCode] = useState(
    `//write code`
  );
  const [value, setValue] = useState(code || "");

  const handlePrevious = (e) => {
    const index = tasks.indexOf(current)
    e.stopPropagation()
    if (index === 0) {
      setCurrent(tasks[tasks.length - 1])
    } else
    setCurrent(tasks[index - 1])
  }

  const handleNext = (e) => {
    const index = tasks.indexOf(current)
    e.stopPropagation()
    if (index === tasks.length - 1) {
      setCurrent(tasks[0])
    } else
    setCurrent(tasks[index + 1])
  }

  return (
    <>
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Задание {tasks.indexOf(current) + 1}
            <Button onClick={(e) => handlePrevious(e)} style={{marginLeft: '10px'}} variant="outline-primary">Назад</Button>
            <Button onClick={(e) => handleNext(e)} style={{marginLeft: '10px'}} variant="outline-primary">Вперед</Button>
          </Accordion.Header>
          <Accordion.Body>
            <div>{current?.description}</div>
            {current?.inputs?.map((item, index) => { //Удалить от сюда
                return(
                  <div key={index} style={{fontStyle: 'italic'}}>
                    {`Input: {${item?.filter(el => {return el !== ''})}}, 
                      Output: {${current?.outputs[index]?.filter(el => {return el !== ''})}}`}
                  </div>
                )
            })/*До сюда, если не нужно отображение тесткейсов в практике*/}
            <div style={{fontStyle: 'italic'}}>{}</div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    <div className="horizontal-flex">
    <Editor
        height="80vh"
        width={`65%`}
        language={'cpp'}
        value={value}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        theme={"vs-dark"}
      />
      <div className="output-wrapper">
        <div className="ouput-panel">
          <h3>Вывод</h3>
          <div>{output}</div>
        </div>
        <div className="ouput-panel">
          <h3>Ошибки</h3>
          <div>{error}</div>
        </div>
      </div>
    </div>
      
    <button onClick={()=>{sendCode(value)}}  className='btn btn-dark'>
      Send code
    </button>
    <button onClick={()=>{sendAnswer(value)}}  className='btn btn-dark'>
      Send answer to teacher
    </button>
    <input
    type="text"
    className="form-control"
    placeholder="Введите входные значения через пробел"
    aria-label="Введите входные значения через пробел"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    </>
  )
})



export default Practice


/*
#include <iostream> 
int main() { int a,b;   
std::cin >>a>>b; std::cout<<"Result: "<<a+b;  
return 0;  
} 
*/