import { useDispatch, useSelector } from "react-redux";
import {
	setTasks,
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
	const text = useSelector((store) => store.text);
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

	const handleClick = () => {
		console.log("handleClick");
		dispatch(setTasks(text));
		dispatch(setText(""));
	};


	return (
		<div>
			<input onChange={(e) => dispatch(setText(e.target.value))} value={text} />
			<button onClick={() => handleClick()}>Добавить</button>

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
								<h1 style={{color: "#26d4d4"}}>{item.title}</h1>
							) : (
								<h1 style={{ color: "#000",textDecoration:'line-through' }}>{item.title}</h1>
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
