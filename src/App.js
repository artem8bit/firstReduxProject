import Temp1 from "./Temp1";
import Temp2 from "./Temp2";
// import ToDo from "./ToDo";
import store from "./redux/store"
import { Provider } from "react-redux";
// import store from "./redux/store";


import "./App.css";


const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<Temp1 />
				<Temp2 />
      
			</Provider>
		</div>
	);
};

export default App;






// Событие в ui => 
// тригеррится action, обораиваем его в dispatch, чтобы отслеживать изменнеия=> 
// по типу определяем какой редьюсер сработает => 
// reducers определяет как будет меняться store