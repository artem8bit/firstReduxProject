

import { combineReducers } from "redux";
import textReducer from './textReducer'
import todosReducer from "./todosReducer";
import editTextReducer from './editTextReducer'

export default combineReducers({
  text: textReducer,
  todos: todosReducer,
  editText: editTextReducer,
})









































