import { SET_TEXT } from "../actions/actionTypes";

const initialValue = "";

export default function textReduser(state = initialValue, action) {
	switch (action.type) {
		case SET_TEXT: {
			return action.payload;
		}

		default: {
      return state
		}
	}
}

// описываем изменения store по событию
// обновляем store и возвр то, что закинул в action