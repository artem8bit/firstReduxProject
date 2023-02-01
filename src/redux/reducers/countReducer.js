
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












