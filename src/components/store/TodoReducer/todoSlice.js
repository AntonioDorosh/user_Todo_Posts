import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask)
        },
        deleteTask: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        },
    }
})

export const {addTask, deleteTask} = todoSlice.actions;

export default todoSlice.reducer;