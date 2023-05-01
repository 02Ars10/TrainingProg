import {$authHost, $host} from "./index";

export const createSolution = async (task_id, student_id, tcode, input, output, errors, grade, comment) => {
    const {data} = await $authHost.post('solutions/create', {task_id, student_id, tcode, input, output, errors, grade, comment})
    return data
}

export const updateSolution = async (id, grade, comment) => {
    const {data} = await $authHost.post(`solutions/update/${id}`, {grade: grade, comment: comment})
    return data
}

export const getSolutionByUser = async (student_id) => {
    const {data} = await $authHost.get(`solutions/byUser/${student_id}`)
    return data
}