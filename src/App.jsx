import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Todos from './components/Todos'

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px'
  },
  title: {
    fontSize: '36px'
  }
}

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
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <Todos todos={todos}/>
      </div>
    </>
  )
}

export default App
