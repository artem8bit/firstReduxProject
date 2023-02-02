import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/actions/textAction";
import { setTasks } from "../redux/actions/tasksAction";

import "../App.css";

const Input = () => {
	const dispatch = useDispatch("");
	const text = useSelector((store) => store.text);
  	const todos = useSelector((store) => store.todos);
	const handleClick = () => {
		dispatch(setTasks(text));
		dispatch(setText(""));
	};

	return (
		<>
      <h1>Задачи на день:{todos.length}</h1>
			<input onChange={(e) => dispatch(setText(e.target.value))} value={text} />
			<button onClick={() => handleClick()}>Добавить</button>
		</>
	);
};

export default Input;
