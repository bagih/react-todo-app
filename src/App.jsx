import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm';

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px'
  },
  title: {
    fontSize: '36px'
  }
}

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Pergi mencuci pakaian',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'menyiram tanaman',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Pergi meeting bersama kontraktor',
      isCompleted: false
    },
  ]);

  const toggleCompletedItem = (todoId) => {
      const updatedTodos = todos.map((todo) => {
        if(todo.id === todoId){
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
      setTodos(updatedTodos)
    }

    const handleDeleteTodo = (todoId) => {
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== todoId
      })
      setTodos(updatedTodos)
    }

    const addTodo = (todoTitle) => {
      if(todoTitle === ''){
        return
      }

      const newTodo = {
        id: todos.length + 1,
        title: todoTitle,
        isCompleted: false,
      }

      const updatedTodos = todos.concat(newTodo)
      setTodos(updatedTodos)
    }

  return (
    <TodoContext.Provider
     value={{ toggleCompletedItem, handleDeleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm 
          addTodo={addTodo}
        />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}

export default App
