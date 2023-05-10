import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoRender = () => {
    const todos = useSelector(state => state.todo)

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem id={todo.id} title={todo.name}/>
            ))}
        </ul>
    );
};

export default TodoRender;