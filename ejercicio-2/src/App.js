import { useState } from 'react';
import AgregarTarea from './components/AgregarTarea.js';
import ListaDeTareas from './components/Tareas.js';
import './App.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
</style>

let nextId = 0;

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <div className="App">
      <AgregarTarea
        onAddTodo={handleAddTodo}
      />
      <ListaDeTareas
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
