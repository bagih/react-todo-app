import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Pergi mencuci pakaian',
      completed: false,
    },
    {
      id: 2,
      title: 'menyiram tanaman',
      completed: false,
    },
    {
      id: 3,
      title: 'Pergi meeting bersama kontraktor',
      completed: false
    },
  ]);

  return (
    <>
      <div className='App'>
        <h1>My Todo List</h1>
        {todos.map((todo) => {
          return (
            <p key={todo.id}>{todo.title}</p>
          );
        })}
      </div>
    </>
  )
}

export default App
