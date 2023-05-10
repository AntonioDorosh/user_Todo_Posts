import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../../features/UserReducer/UserSlice";
import todoSlice from "../../features/TodoReducer/todoSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice
    }
})