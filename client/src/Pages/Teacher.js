import { useEffect, useState } from "react";
import { Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { $authHost, $host } from "../http";

export default function Teacher() {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [selects, setSelects] = useState({});

    useEffect(() => {
        $authHost.get('user/all').then(data => {
            console.log(data)
            setUsers(data.data.users)
        });
        $authHost.get('groups/all').then(data => {
            console.log(data)
            setGroups(data.data.groups);
        });
    }, [])

    const onChangeSelect = (userId) => (e) => {
        setSelects(prev => { 
            console.log(e.target.value)
            return {...prev, [userId]: e.target.value } 
        })
        $authHost.post(`groups/${userId}/${e.target.value}`).then(console.log);
    }
    return <>
        <ListGroup>
            {users.map(e => <ListGroupItem key={e.id}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <h2>{e.email}</h2>
                    <Form.Select aria-label="Группа" style={{ maxWidth: '500px' }} value={selects[e.id] || e.group_id || null} onChange={onChangeSelect(e.id)}>
                    <option value={null}></option>
                        {groups.map(option=><option key={option.id} value={option.id}>{option.name}</option>)}
                    </Form.Select>
                </div>
            </ListGroupItem>)}
        </ListGroup>
    </>
}