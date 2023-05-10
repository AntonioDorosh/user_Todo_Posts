import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: crypto.randomUUID(),
                name: action.payload.task,
                completed: false,
            }
            state.push(newTask)
        },
        deleteTask: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        },
        toggleCompleted: (state, action) => {
            const toggleTodo = state.find(todo => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const {addTask, deleteTask, toggleCompleted} = todoSlice.actions;

export default todoSlice.reducer;