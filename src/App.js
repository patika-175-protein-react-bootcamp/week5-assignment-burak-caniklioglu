
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import FormSide from './components/Form';
import Patika from './components/Patika';
import  useWindowSize  from './hooks/useWindowSize';

function App() {
  const [, height] = useWindowSize(); // ekran boyutunu veren custom hook yapısı
  const [night, setNight] = useState(false) // gece modu

  return (
    <div className="App">
      <Patika   height={height} isNight = {night} />
      <FormSide isNight={night} change={setNight}/>
      <ToastContainer />
    </div>
  );
}

export default App;
