import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    container: {
        width: '40%',
        margin: '0 auto'
    }
}

const Todos = ({ todos, toggleCompletedItem }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} todo={todo} toggleCompletedItem={toggleCompletedItem} />
                );
            })}
        </div>
    )
}

export default Todos;