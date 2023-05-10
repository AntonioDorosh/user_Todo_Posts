import React from 'react';
import './App.css'
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div className='container'>
            <div className="btnContainer">
                <Link to={'/user'}>
                    <button className='button'>Sign in</button>
                </Link>
                <Link to={'/todo'}>
                    <button className='button'>Todo App</button>
                </Link>
                <Link to={'/posts'}>
                    <button className='button'>Posts</button>
                </Link>
            </div>
        </div>
    );
};

export default App;