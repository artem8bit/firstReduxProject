// 6

import { combineReducers } from "redux";
import textReducer from './textReducer'
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
  text: textReducer,
  count: countReducer,
  todos: todosReducer,
})









































// import { combineReducers } from "redux";
// import textReducer from "./textReducer";


// // объединил переданные reduc ers
// export default combineReducers({
// 	text: textReducer, 
// });
