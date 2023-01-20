import { SET_TODO, CHANGE_TODO, DEL_TODO, EDIT_TODO, COMPLETED_TODO } from "./actionTypes"


export const setTasks=(data)=>{
  return{
    type:SET_TODO,
    payload: data,
  }
}



export const changeStatus=(data)=>{
  return{
    type:CHANGE_TODO,
    payload: data,
  }
}

export const handleDelete = (data) => {
  return{
    type: DEL_TODO,
    payload: data,
  }
}
export const setIsEdit = (data) => {
  return{
    type: EDIT_TODO,
    payload: data,
  }
}
export const updateTodos = (data) => {
  return{
    type: COMPLETED_TODO,
    payload: data,
  }
}
