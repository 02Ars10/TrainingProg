import { useEffect, useState } from "react"
import { $authHost } from "../http";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import MyModal from "../Components/MyModal";
import NewTaskForm from "../Components/NewTaskForm";
import { createTask, destroyTask, getAllTasks, updateTask } from "../http/taskApi";

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [groups, setGroups] = useState([])
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState([])
    const [inputs, setInputs] = useState([])
    const [outputs, setOutputs] = useState([])
    const [changer, setChanger] = useState('')
    const [dep, setDep] = useState(1)
    
    useEffect(() => {
        getAllTasks().then(data => {
            setTasks(data)
        })
    },[modal, dep]);

    useEffect(() => {
        $authHost.get('groups/all').then(data => {
            setGroups(data.data.groups)
        });
    }, []);

    const lengthFix = (array) => {
        let max = 0
        array?.map(item => {
            if(item.length > max) {
                max = item.length
            }
        })
        array?.map(item => {
            while (item.length < max) {
                item.push('')
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        lengthFix(inputs)
        lengthFix(outputs)
        if (changer) {
            await updateTask(changer, form.group, form.task, inputs, outputs)
        } else {
            await createTask(form.group, form.task, inputs, outputs)
        }
        setForm([])
        setInputs([])
        setOutputs([])
        setModal(false)
        setChanger('')
    }

    const changeHandler = (item) => {
        setChanger(item.id)
        setModal(true)
        setForm({task: item.description, group: item.group_id})
        setInputs(item.inputs)
        setOutputs(item.outputs)
    }

    const deleteHandler = async (id) => {
        setDep(2)
        await destroyTask(id)
        setDep(1)
    }

    return (
        <div>
            <Button variant="outline-dark"
                    className="w-100"
                    onClick={() => {setModal(true); setForm([]); setInputs([]); setOutputs([])}}>
                Добавить задание
            </Button>
            <ListGroup className="w-75 m-auto">
                {tasks?.map((item, index) => {
                    return(
                        <ListGroupItem key={index}>
                            <Button variant="outline-dark"
                                    onClick={() => changeHandler(item)}>
                                Изменить
                            </Button>
                            <Button variant="outline-dark"
                                onClick={() => deleteHandler(item.id)}>
                                Удалить
                            </Button>
                            <h5>Задание №{index + 1} для группы {groups.find(el => el.id === item.group_id)?.name}</h5>
                            <div>{item.description}</div>
                            {item?.inputs?.map((inp, ind) => {
                                return (
                                    <div style={{fontStyle: 'italic'}}>
                                        {`Input: {${inp?.filter(el => {return el !== ''})}},
                                          Output: {${item.outputs[ind].filter(el => {return el !== ''})}}`}
                                    </div>
                                )
                            })}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            <MyModal show={modal}
                     header={"Добавить/Изменить задание"}
                     onHide={() => {setModal(false); setChanger('')}}>
                <NewTaskForm groups={groups}
                             onSubmit={onSubmit}
                             closeModal={() => {setModal(false); setChanger('')}}
                             form={form}
                             setForm={setForm}
                             inputs={inputs}
                             setInputs={setInputs}
                             outputs={outputs}
                             setOutputs={setOutputs}/>
            </MyModal>
        </div>
    )
}

export default Tasks