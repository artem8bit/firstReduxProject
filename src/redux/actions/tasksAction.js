import { SET_TODO,DEL_TODO, EDIT_TODO, HANDLE_EDIT} from "./actionTypes"


export const setTasks=(data)=>{
  return{
    type:SET_TODO,
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

export const handleEdit = (data) => {
  return{
    type:HANDLE_EDIT,
    payload: data,
  }
}

