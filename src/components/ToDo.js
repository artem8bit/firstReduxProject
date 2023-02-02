import { useDispatch, useSelector } from "react-redux";

import {
	handleDelete,
	setIsEdit,
	handleEdit,
	setIsDone,
} from "../redux/actions/tasksAction";
import { setText } from "../redux/actions/textAction";
import { setEditText } from "../redux/actions/editTextAction";
import "../App.css";

const ToDo = () => {
	const dispatch = useDispatch("");
	const todos = useSelector((store) => store.todos);
	const editText = useSelector((store) => store.editText);

	const toggle = (id, isEdit) => {
		if (isEdit) {
			dispatch(handleEdit(id, editText));
			dispatch(setIsEdit(id));
		} else {
			dispatch(setIsEdit(id));
			dispatch(setText(""));
		}
	};

	return (
		<div>
			{todos.map((item) => (
				<div key={item.id}>
					{item.isEdit ? (
						<input
							onChange={(e) => dispatch(setEditText(e.target.value))}
							defaultValue={item.title}
						/>
					) : (
						<div onClick={() => dispatch(setIsDone(item.id))}>
							{!item.isDone ? (
								<h1 style={{ color: "#26d4d4" }}>{item.title}</h1>
							) : (
								<h1 style={{ color: "#000", textDecoration: "line-through" }}>
									{item.title}
								</h1>
							)}
						</div>
					)}
					<button onClick={() => dispatch(handleDelete(item.id))}>
						Удалить
					</button>
					<button onClick={() => toggle(item.id, item.isEdit)}>
						{item.isEdit ? "Сохранить" : "Изменить"}
					</button>
				</div>
			))}
		</div>
	);
};

export default ToDo;
