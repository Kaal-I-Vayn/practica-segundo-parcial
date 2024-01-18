import { useState } from 'react';

export default function ListaDeTareas({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        
        <li key={todo.id}>
        <div className='Tarea'>
          <Tarea
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </div>  
        </li>
        
      ))}
    </ul>
  );
}

function Tarea({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Guardar
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Editar
        </button>
      </>
    );
  }
  return (
    <div className='contenedor-tarea'>
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Eliminar
      </button>
    </label>
    </div>
    
  );
}
