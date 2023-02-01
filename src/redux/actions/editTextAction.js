import { SET_EDIT_TEXT } from "./actionTypes"

export const setEditText =(data)=>{
  return{
    type:SET_EDIT_TEXT, 
    payload: data
  }
}
