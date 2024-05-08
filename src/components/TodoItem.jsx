import React, { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {

    const {toggleCompletedItem, handleDeleteTodo} = useContext(TodoContext)

    const getTodoTitleStyle = () => {
        if (todo.isCompleted) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    };

    return (
        <div style={styles.todoItem}>
            <input type="checkbox" style={styles.checkbox} onChange={() => { toggleCompletedItem(todo.id) }} />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button style={styles.button} onClick={() => { handleDeleteTodo(todo.id) }}>x</button>
        </div>
    );
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    },
    checkbox: {
        height: '18px',
        width: '18px',
        cursor: 'pointer'
    },
    button: {
        backgroundColor: '#C40C0C',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px'
    }
}

export default TodoItem;