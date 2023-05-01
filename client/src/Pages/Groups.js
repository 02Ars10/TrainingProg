import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap";
import { $authHost, $host } from "../http";

export default function Groups() {
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        $authHost.get('groups/all').then(data => {
            console.log(data)
            setGroups(data.data.groups)
        });
    }, []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = e => {
        e.preventDefault();
        const group_name = e.target.elements.group_name.value;
        $authHost.post('groups/add', {name:group_name}).then(data => {
            $authHost.get('groups/all').then(data => {
                console.log(data)
                setGroups(data.data.groups);
                setShow(false)
            });
        });
        // temp2.target.elements.group_name.value
    };
    return <>
        <ListGroup>
            {groups.map(e => <ListGroupItem key={e.id}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>{e.name}</div>
            </ListGroupItem>)}
        </ListGroup>
        <br />
        <p style={{ width: "100%", position: 'reative', height: "70px" }} >
            <Button style={{ position: 'absolute', right: "1%" }} onClick={handleShow}>Добавить группу</Button>
        </p>
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>

                    <Modal.Header closeButton>
                        <Modal.Title>Добавить группу</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" name="group_name" >
                            <Form.Label name="group_name">Введдите название группы</Form.Label>
                            <Form.Control type="text" placeholder="Группа" name="group_name"/>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" type="submit">
                            Добавить
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    </>
}