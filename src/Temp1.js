import { setText } from "./redux/actions/textAction";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

const Temp1 = () => {
	const dispatch = useDispatch();
	const { text } = useSelector((store) => store.text);
	//  useState[text, setText] = useState('')
	return (
		<div className="App">
			<input onChange={(e) => dispatch(setText(e.target.value))} value={text} />
		</div>
	);
};

export default Temp1;

//меняем состояние
// вызывается функция action, которая тригерит редьюсер по типу, редьюсер изменяет store, и изменения отображаются
// вызвать actionCreater - useDispatch
// для того чтобы достучаться в value - useSelector() 1й параметр-функция, второй-
