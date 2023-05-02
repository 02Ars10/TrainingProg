import {$authHost, $host} from "./index"; //для отправки запросов на сервер с токеном авторизации

export const createSolution = async (task_id, student_id, tcode, input, output, errors, grade, comment) => { //создать новое решение задачи
    const {data} = await $authHost.post('solutions/create', {task_id, student_id, tcode, input, output, errors, grade, comment})
    return data
}

export const updateSolution = async (id, grade, comment) => { //обновить комментарий и оценку
    const {data} = await $authHost.post(`solutions/update/${id}`, {grade: grade, comment: comment})
    return data
}

export const getSolutionByUser = async (student_id) => { //получить все решения определенного студента
    const {data} = await $authHost.get(`solutions/byUser/${student_id}`)
    return data
}