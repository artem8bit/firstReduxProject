import { useDispatch, useSelector } from "react-redux";
import {
	setTasks,
	handleDelete,
	setIsEdit,
	handleEdit
} from "../redux/actions/tasksAction";
import { setText } from "../redux/actions/textAction";

import "../App.css";

const ToDo = () => {
	const dispatch = useDispatch("");
	// const[todos, addToDo] = useState([])
	const todos = useSelector((store) => store.todos);
	const text = useSelector((store) => store.text);

	const toggle = (id, isEdit) => {
		if (isEdit) {
			console.log(handleEdit(text));
			
			dispatch(setIsEdit(id));
		} else {
			dispatch(setIsEdit(id));
		}
	};

	return (
		<div>
			<input onChange={(e) => dispatch(setText(e.target.value))} value={text} />
			<button onClick={() => dispatch(setTasks(text))}>add</button>

			{todos.map((item) => (
				<div key={item.id}>
					{item.isEdit ? (
						<input
							defaultValue={item.title}
							onChange={(e) => dispatch(setText(e.target.value))}
						/>
					) : (
						<h1 style={{ color: "green" }}>{item.title}</h1>
					)}
					<button onClick={() => dispatch(handleDelete(item.id))}>
						delete
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
