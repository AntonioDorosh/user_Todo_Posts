import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import User from "../components/User/User";
import Todo from "../components/TodoApp/Todo";
import Posts from "../components/Posts/Posts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/user',
        element: <User/>
    },
    {
        path: '/todo',
        element: <Todo/>
    },
    {
        path: '/posts',
        element: <Posts/>
    }
])