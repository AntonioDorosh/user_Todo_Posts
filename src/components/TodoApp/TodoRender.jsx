import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoRender = () => {
    const todos = useSelector(state => state.todo)

    return (
        <ul>
            {todos.length > 0
                ? todos.map(todo => (
                    <TodoItem id={todo.id} title={todo.name} todo={todo}/>
                ))
                : <h2>No todos yet</h2>}
        </ul>
    );
};

export default TodoRender;