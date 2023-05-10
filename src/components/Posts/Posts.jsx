import React from 'react';
import {Link} from "react-router-dom";
import styles from './Post.module.css'

const Posts = () => {
    return (
        <div className='container'>
                <Link to={'/'}>
                    <button className={styles.home}>Back home</button>
                </Link>
                <h2>Posts Async information</h2>
                <button>Get Posts</button>
        </div>
    );
};

export default Posts;