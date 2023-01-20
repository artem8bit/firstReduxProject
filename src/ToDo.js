import { useDispatch, useSelector } from "react-redux";
import {
	setTasks,
	changeStatus,
	handleDelete,
	setIsEdit,
	updateTodos
} from "./redux/actions/tasksAction";
import { setText } from "./redux/actions/textAction";

import "./App.css";
import { useRef } from "react";

const ToDo = () => {
	const dispatch = useDispatch("");
	// const[todos, addToDo] = useState([])
	const todos = useSelector((store) => store.todos);

	const text = useSelector((store) => store.text);
	const inputRef = useRef(true);


	const changeFocus = () => {
		inputRef.current.disabled = false;
		inputRef.current.focus();
	};
	
	return (
		<div>
			<input onChange={(e) => dispatch(setText(e.target.value))} defaultValue={text}/>
			<button onClick={() => dispatch(setTasks(text))}>add</button>
			{todos.map((item) => (
				<div key={item.id}>
					{item.completed ? (
						<h1
							style={{
								textDecoration: "line-through",
								color: "gray",
							}}
						>
							{item.title}
						</h1>
					) : (
						<h1 style={{ color: "green" }}>{item.title}</h1>
					)}

					<button onClick={() => dispatch(handleDelete(item.id))}>
						delete
					</button>

					<button onClick={() => dispatch(changeStatus(item.id))}>done</button>

						{item.isEdit ? <input defaultValue={item.title} onChange={(e)=> dispatch(setText(e.target.value))} />  : <p></p>}

					{/* <input   defaultValue={item.title} onChange={(e)=> dispatch(setText(e.target.value))} /> */}
					<button onClick={() => dispatch(setIsEdit(item.id))}>edit</button>
					<button onClick={() => dispatch(updateTodos(item.id))}>completed</button>
				</div>
			))}
		</div>
	);
};

export default ToDo;
