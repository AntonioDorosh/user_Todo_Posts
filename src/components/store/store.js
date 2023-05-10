import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./UserReducer/UserSlice";
import todoSlice from "./TodoReducer/todoSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice
    }
})