// 5
import {SET_DEC, SET_INC} from "../actions/actionTypes";

const initialValue = 0;
export default function countReducer(state = initialValue, action) {
	switch (action.type) {
		case SET_DEC: {
			return action.payload;
		}
		case SET_INC: {
			return action.payload;
		}

		default: {
			return state;
		}
	}
}













// import { SET_TEXT } from "../actions/actionTypes";

// const initialValue = "";

// export default function textReducer(state = initialValue, action) {
// 	switch (action.type) {
// 		case SET_TEXT: {
// 			return action.payload;
// 		}

// 		default: {
//       return state
// 		}
// 	}
// }

// описываем изменения store по событию
// обновляем store и возвр то, что закинул в action
