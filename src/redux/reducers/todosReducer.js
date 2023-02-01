// 5

import {
	SET_TODO,
	DEL_TODO,
	EDIT_TODO,
	HANDLE_EDIT,
	DONE_TODO
} from "../actions/actionTypes";

const initialValue = [{ id: 1, title: "Water", isEdit: false, isDone: false }];

export default function todosReducer(state = initialValue, action) {
	switch (action.type) {
		case SET_TODO: {
			return [
				...state,
				{
					id: Math.floor(Math.random() * 1000),
					title: action.payload,
					isEdit: false,
				},
			];
		}

		case DEL_TODO: {
			return state.filter((item) => item.id !== action.payload);
		}

		case DONE_TODO: {
			const setIsDone =  state.map((item) =>
				item.id === action.payload ? { ...item, isDone: !item.isDone } : item
			);
			console.log(setIsDone);
			return setIsDone
		}

		case EDIT_TODO: {
			return state.map((item) =>
				item.id === action.payload ? { ...item, isEdit: !item.isEdit } : item
			);
		}

		case HANDLE_EDIT: {
			const updateTodo = state.map((item) =>
				item.id === action.payload.id
					? { ...item, title: action.payload.text }
					: item
			);
			console.log(updateTodo);
			return updateTodo;
		}

		default: {
			return state;
		}
	}
}

