import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    const handleFormInput = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div style={styles.container}>
            <form
                onSubmit={(event) => { handleSubmit(event) }}    
            >
                <input 
                    type="text" 
                    placeholder="Add your item / task"
                    style={styles.formInput}
                    onChange={(event) => { handleFormInput(event) }}
                    value={title}
                />
                <button style={styles.button}>Add Todo</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '66px',
        width: '40%',
        fontSize: '16px',
        padding: '0 16px',
        borderRadius: '4px',
        border: '2px solid #f4f4f4',
    },
    button: {
        height: '72px',
        fontSize: '16px',
        marginLeft: '8px',
        borderRadius: '8px',
        border: '2px solid #f4f4f4',
        backgroundColor: '#153448',
        color: '#fff',
        width: '10%',
        cursor: 'pointer',
    }
}

export default TodoForm;