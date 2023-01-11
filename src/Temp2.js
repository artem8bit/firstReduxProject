import { useSelector } from 'react-redux';

import './App.css';

 const Temp2 = () => {
 const text = useSelector((store) => store.text)
  return (
    <div className="App">

     <h1>{text}</h1>
    </div>
  );
}

export default Temp2;

// рендерим состояние
// к любому состоянию добираемся через useSelector