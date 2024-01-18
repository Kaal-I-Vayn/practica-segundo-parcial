import './App.css';
import './styles/Boton.css'
import './styles/Temporizador.css'
import Temporizador from './components/Temporizador';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
</style>

function App() {
  

  return (
    <div className="App">
        <h1 className='title'>Timer</h1>        
        <Temporizador/> 
    </div>
  );
}

export default App;
