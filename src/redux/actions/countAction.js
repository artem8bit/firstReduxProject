import { SET_DEC, SET_INC } from "./actionTypes"

export const setDec=(data)=>{
  return{
    type:SET_DEC,
    payload: data
  }
}

export const setInc=(data)=>{
  return{
    type:SET_INC,
    payload: data
  }
}