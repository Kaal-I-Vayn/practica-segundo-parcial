import { useState } from 'react';
import '../styles/AgregarTareas.css'


export default function AgregarTarea({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <div className='contenedor-addtodo'>
      <input
        placeholder="Agregar tarea :D"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Agregar</button>
    </div>
  )
}
