import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './Todo.module.css'
import {useDispatch} from "react-redux";
import {addTask} from "../store/TodoReducer/todoSlice";
import TodoRender from "./TodoRender";

const Todo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length === 0) {
            alert('Enter task before adding');
            setValue('')
            return;
        }

        dispatch(
            addTask({
                task: value
            })
        )
        setValue('')
    }

    return (
        <div className='container'>
            <Link to={'/'}>
                <button className={styles.home}>Back home</button>
            </Link>
            <h2>Todo App</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="text" placeholder='add todo' value={value} onChange={(event) => setValue(event.target.value)}/>
                <button className={styles.submitButton} type={"submit"} onClick={onSubmit}>submit
                </button>
            </div>
            <TodoRender/>
        </div>
    );
};

export default Todo;