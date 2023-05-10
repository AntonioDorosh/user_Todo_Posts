import React from 'react';
import {useDispatch} from "react-redux";
import {
    deleteTask,
    toggleCompleted
} from "../../features/TodoReducer/todoSlice";
import styles from './Todo.module.css'

const TodoItem = ({title, id, todo}) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(deleteTask({id}))
    }

    const toggleTodoHandler = () => {
        dispatch(toggleCompleted(id))
    }

    return (
        <li className={styles.taskItem}>
            <button className={styles.completedButton} onClick={() => toggleTodoHandler(todo.id)}>Completed</button>
            <div className={`${todo.completed  ? styles.completed : ''}`}>
                <h2>{title}</h2>
            </div>
            <button className={styles.removeTaskButton} onClick={removeTask}>remove</button>
        </li>
    );
};

export default TodoItem;