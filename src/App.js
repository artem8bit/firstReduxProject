// 5
import ToDo from "./ToDo";

import { Provider } from "react-redux";
import store from "./redux/store"

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<ToDo/>
			</Provider>
		</div>
	);
};

export default App;






































// import Temp1 from "./Temp1";
// import Temp2 from "./Temp2";
// // import ToDo from "./ToDo";
// import store from "./redux/store"
// import { Provider } from "react-redux";
// // import store from "./redux/store";

// import "./App.css";

// const App = () => {
// 	return (
// 		<div className="App">
// 			<Provider>
// 				<Temp1/>
// 				<Temp2/> store={store}
// 			</Provider>
// 		</div>
// 	);
// };

// export default App;

// Событие в ui =>
// тригеррится action, обораиваем его в dispatch, чтобы отслеживать изменнеия=>
// по типу определяем какой редьюсер сработает =>
// reducers определяет как будет меняться store

// пользователь на ui что-то ввел
// сработал какой-то экшн(действие)
// редьюсер обновляет наш стор
// обновленные данные появляются в ui
