// 5

import { SET_TODO, DEL_TODO, EDIT_TODO, HANDLE_EDIT} from "../actions/actionTypes";

const initialValue = [
	{id: 1, title: 'Water', isEdit:false}
];

export default function todosReducer(state = initialValue, action) {
	switch (action.type) {
		case SET_TODO: {
			return [...state, {id: Math.floor(Math.random()*1000), title: action.payload,isEdit:false}];
		}
		
		case DEL_TODO: {
			return state.filter((item) => item.id !== action.payload);
		}

		case EDIT_TODO:{
			return state.map( (item) => item.id === action.payload ? {...item, isEdit:!item.isEdit}: item);
			
		}

		case HANDLE_EDIT:{
			return state.map((item) => item.id === action.payload ? [...state, {...item, title: action.payload}]: item)
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
