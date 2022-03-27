import { ADD_TODO, DELEETE_TODO, ADD_COUNT } from "./ActionTypes";


export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data,
})

export const deleteTodo = (id) => ({
    type: DELEETE_TODO,
    payload: id,
})


