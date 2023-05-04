import { useContext, useEffect, useState } from "react";
import { getSolutionByUser, updateSolution } from "../http/solutionsApi";
import { get_user_by_id } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Accordion, Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { getTasksByGroup } from "../http/taskApi";
import Editor from "@monaco-editor/react";
import { $authHost } from "../http";

const Solutions = observer(() => {

    const {user} = useContext(Context)

    const checkUser = (user) => {
        if (user._user.token) {
          return user._user.token.id
        } else {
          return user._user.id
        }
      }

    const checkGroup = (user) => {
        if (user._user.token) {
          return user._user.token.group
        } else {
          return user._user.group
        }
      }
      
    const checkRole = (user) => {
      if (user._user.token) {
        return user._user.token.role
      } else {
        return user._user.role
      }
    }  

    const [currentUser, setCurrentUser] = useState(checkUser(user))
    const [current_user, set_current_user] = useState([]) 
    const [solutions, setSolutions] = useState([])
    const [tasks, setTasks] = useState([])
    const [groups, setGroups] = useState([])
    const [students, setStudents] = useState([])
    const [group, setGroup] = useState()
  
    useEffect(() => {
        getSolutionByUser(currentUser).then(data => {
            setSolutions(data)
          
        })
        

        get_user_by_id(currentUser).then(data => {
          set_current_user(data.users.avg_grade)
          
        })
        if (checkRole(user) === 'USER') {
          getTasksByGroup(checkGroup(user)).then(data => {
            setTasks(data)
        })
        }
        if (checkRole(user) === 'TEACHER') {
          $authHost.get('groups/all').then(data => {
            setGroups(data.data.groups)
        });
        }
    }, [currentUser])

    const groupSelect = (e) => {
      e.preventDefault()
      setGroup(e.target.value)
      $authHost.get(`user/byGroup/${e.target.value}`).then(data => {
        setStudents(data.data.users)
    });
    }

    const userSelect = (user) => {
      setCurrentUser(user)
      
      getTasksByGroup(group).then(data => {
        setTasks(data)
      })
      // get_user_by_id(currentUser).then(data => {
      //   set_current_user(data)
        
      // })
      getSolutionByUser(currentUser).then(data => {
        setSolutions(data)
        
      })
    }

    const changeGrade = (index, value) => {
      const newState = [...solutions]
      newState[index].grade = value
      setSolutions(newState)
    }

    const changeComment = (index, value) => {
      const newState = [...solutions]
      newState[index].comment = value
      setSolutions(newState)
    }

    return (
      <>
      <div className="d-flex flex-row">
        {checkRole(user) === 'TEACHER' && 
          <div className="w-25"> 
            <Form.Select defaultValue={'blank'} 
                    onChange={(e) => groupSelect(e)}>
              <option value={'blank'} disabled>Выберите группу</option>
              {groups?.map((item, index) => {
                return (
                <option key={index} value={item.id}>{item.name}</option>
                )
              })}
            </Form.Select>
            {students?.map((item) => {
              return (
                <ListGroup key={item.id}>
                  <ListGroupItem>
                  <div onClick={() => userSelect(item.id)}>{item.email} : Средняя оценка - {item.avg_grade} </div>
                  </ListGroupItem>
                </ListGroup>
              )
            })}
          </div> 
        }
       
          
        
        <div className="w-75 m-auto">
          <ListGroup>
          {checkRole(user) === 'USER' && (current_user) && <h3>Средняя оценка: {current_user}</h3> }


              {solutions?.map((item, index) => {
            
                  return(
                    <ListGroupItem className="solutions" key={item.id}>
                         <h5>Задача №{item.task_id}</h5> 
                          <div>Решение:</div>
                          <div className="border mt-2">
                            <div className="m-2">Code: <br/></div>
                              <Editor
                                height="40vh"
                                value={item.tcode}
                                language={'cpp'}
                                theme={"vs-dark"}
                              />
                            <div className="m-2">Input: <br/>{item.input}</div>
                            <div className="m-2">Output: <br/>{item.output}</div>
                            <div className="m-2">{item.errors[0] ? `Ошибки на тестах ${item.errors}` : 'Тесты пройдены'}</div>
                          </div>
                          <div className="mt-2 d-flex align-items-center">Оценка:
                            {checkRole(user) === "TEACHER" ? 
                              <>
                             <Form.Control className="grade m-2" maxLength={1} value={item.grade} onChange={(e) => changeGrade(index, e.target.value)}/>
                              <Button onClick={() => updateSolution(item.id, solutions[index].grade, solutions[index].comment)}>Ok</Button>
                              </>
                            :
                              item.grade ? `${item.grade}` : "Нет оценки"
                            } 
                            
                          </div>
                          <div className="mt-2 mb-2">Комментарий: 
                            {checkRole(user) === "TEACHER" ?
                              <div className="d-flex mt-1">
                              <Form.Control as={'textarea'} rows={1} className="comment" value={item.comment} onChange={(e) => changeComment(index, e.target.value)}/>
                              <Button onClick={() => updateSolution(item.id, solutions[index].grade, solutions[index].comment)}>Ok</Button>
                              </div>
                            :
                              item.comment ? `${item.comment}` : "Нет комментария"
                            }
                          </div>
                          <Accordion>
                              <Accordion.Item eventKey="0">
                                  <Accordion.Header>Посмотреть задание</Accordion.Header>
                                  <Accordion.Body>
                                    {tasks?.find(el => el.id === item.task_id)?.description}
                                    {tasks?.find(el => el.id === item.task_id)?.inputs?.map((itm, ind) => {
                                      return (
                                        <div key={ind}>{`i:{${itm}}, o: {${tasks?.find(el => el.id === item.task_id)?.outputs[ind]}}`}</div>
                                      )
                                    })}
                                  </Accordion.Body>
                              </Accordion.Item>
                          </Accordion>
                      </ListGroupItem>
                  )
              })}
          </ListGroup>
        </div>
      </div>
      </>
    )
})

export default Solutions;