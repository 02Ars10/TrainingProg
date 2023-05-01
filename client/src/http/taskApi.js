import {$authHost, $host} from "./index";

export const createTask = async (group_id, description, inputs, outputs) => {
    const {data} = await $authHost.post('tasks/create', {group_id, description, inputs, outputs})
    return data
}

export const getAllTasks = async () => {
    const {data} = await $authHost.get('tasks/all')
    return data
}

export const getTasksByGroup = async (id) => {
    const {data} = await $authHost.get(`tasks/byGroup/${id}`)
    return data
}

export const updateTask = async (id, group_id, description, inputs, outputs) => {
    const {data} = await $authHost.post(`tasks/update/${id}`, {group_id, description, inputs, outputs})
    return data
}

export const destroyTask = async (id) => {
    const {data} = await $authHost.post(`tasks/destroy/${id}`)
    return data
}

