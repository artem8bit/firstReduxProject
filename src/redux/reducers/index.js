

import { combineReducers } from "redux";
import textReducer from './textReducer'
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";
import editTextReducer from './editTextReducer'

export default combineReducers({
  text: textReducer,
  count: countReducer,
  todos: todosReducer,
  editText: editTextReducer,
})









































