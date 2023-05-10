import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTask} from "../store/TodoReducer/todoSlice";
import styles from './Todo.module.css'

const TodoItem = ({title, id}) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }

    return (
        <li className={styles.taskItem}>
            <div>
                {title}
            </div>
            <button className={styles.removeTaskButton} onClick={() => removeTask()}>remove</button>
        </li>
    );
};

export default TodoItem;