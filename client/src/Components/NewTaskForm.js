import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"


const NewTaskForm = ({groups, onSubmit, closeModal, form, setForm, inputs, setInputs, outputs, setOutputs}) => {
    
    const [currentInput, setCurrentInput] = useState('')
    const [currentOutput, setCurrentOutput] = useState('')
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
    }

    const addHandler = () => {
        if (currentInput && currentOutput) {
            
            const inputArray = (currentInput.toString()).split(' ')
            const outputArray = (currentOutput.toString()).split(' ')
            setInputs(arr => [...arr, inputArray])
            setOutputs(arr => [...arr, outputArray])
            setCurrentInput('')
            setCurrentOutput('')
        }
    }

    const deleteInput = (index) => {
        const arrI = [...inputs]
        const arrO = [...outputs]
        arrI.splice(index, 1)
        arrO.splice(index, 1)
        setInputs(arrI)
        setOutputs(arrO)
        }

    return (
        <Form onSubmit={onSubmit}>        
        <Form.Group controlId='form.Task' className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control as='textarea'
                          rows={5}
                          placeholder="Описание"
                          value={form.task}
                          onChange={(e) => {e.preventDefault(); setField('task', e.target.value)}}/>
        </Form.Group>
        <Form.Group controlId='form.Inputs' className="mb-3">
            <Form.Label>Inputs</Form.Label>
            <Form.Control as='textarea'
                          rows={2}
                          placeholder="Входные значения через пробел"
                          value={currentInput}
                          onChange={(e) => {e.preventDefault(); setCurrentInput(e.target.value)}}/>
        </Form.Group>
        <Form.Group controlId='form.Outputs' className="mb-1">
            <Form.Label>Outputs</Form.Label>
            <Form.Control as='textarea'
                          rows={2}
                          placeholder="Ожидаемый результат через пробел"
                          value={currentOutput}
                          onChange={(e) => {e.preventDefault(); setCurrentOutput(e.target.value)}}/>
        </Form.Group>

        <Button className="mb-2" variant="secondary" onClick={addHandler}>Добавить</Button>
        {inputs?.map((item, index) => {
            return (
                <div key={index} style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{fontStyle: 'italic'}} className="mb-1">{`i:{${item}} o:{${outputs[index]}}`}</div>
                <Button 
                    variant="outline-dark" 
                    style={{width: '10px', height: '25px'}}
                    onClick={() => deleteInput(index)}>
                </Button>
                </div>
            )
        })}
        <Form.Group controlId='form.Group' className="mb-3">
            <Form.Label>Выбрать группу</Form.Label>
            <Form.Select defaultValue={'blank'} value={form.group} 
                         onChange={(e) => setField('group', e.target.value)}>
                <option value={'blank'} disabled>Выберите группу</option>
                {groups?.map((item, index) => {
                    return (
                        <option key={index} value={item.id}>{item.name}</option>
                    )
                })}
                
            </Form.Select>
        </Form.Group>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Закрыть</Button>
            <Button variant="primary" type="submit" onClick={onSubmit}>Отправить</Button>
        </Modal.Footer>
        </Form>
    )
}

export default NewTaskForm