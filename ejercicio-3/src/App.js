import {useState} from 'react'
import './App.css';
import Boton from './components/Boton';
import Texto from './components/Texto';

function App() {
  const [ocultar, setOcultar] = useState(false);


  return (
    <div className="App">
      <Boton
        claseBoton="false"
        funcionClick={() => setOcultar((ocultar) => !ocultar)}
      />
      {ocultar ? <Texto /> : null}
    </div>
  );
}

export default App;
