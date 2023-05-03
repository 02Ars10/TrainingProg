import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const registration = async (email, password) => {
    const {data} = await $host.post('user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return {token: jwt_decode(data.token), role: data.role}
}

export const login = async (email, password) => {
    const {data} = await $host.post('user/login', {email, password})
    localStorage.setItem('token', data.token)
    return {token: jwt_decode(data.token), role: data.role}
}

export const check = async () => {
    const {data} = await $authHost.get('user/auth' )
    if(data.token){
        localStorage.setItem('token', data.token)
    }
    return jwt_decode(data)
}

export const get_user_by_id = async (user_id) => {
    const {data} = await $authHost.post(`user/by_id/${user_id}`)
    return data
}
export const addTeacher = async (email, password) => {
    const token = localStorage.getItem('token');
    const {data} = await $authHost.post('teacher/registration', {email, password, token})
    return {token: jwt_decode(data.token), role: data.role}
}