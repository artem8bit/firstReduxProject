import { combineReducers } from "redux";
import textReduser from "./textReduce";


// объединил переданные redusers
export default combineReducers({
	text: textReduser, 
});
