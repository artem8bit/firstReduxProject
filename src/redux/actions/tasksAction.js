import { SET_TODO,DEL_TODO, EDIT_TODO, HANDLE_EDIT, DONE_TODO} from "./actionTypes"


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
export const setIsDone = (data) => {
  return{
    type: DONE_TODO,
    payload: data,
  }
}

export const handleEdit = (id, text) => {
  return{
    type:HANDLE_EDIT,
    payload: {id, text}
  }
}

