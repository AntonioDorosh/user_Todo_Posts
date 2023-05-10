import React from 'react';
import Input from "../../UI/Input/Input";
import {Link} from "react-router-dom";
import styles from './User.module.css'
import {useDispatch} from "react-redux";

const User = () => {
    return (
        <div className='container'>
            <Link to={'/'}>
                <button className={styles.home}>Back home</button>
            </Link>
            <h2>Redux toolkit State Change</h2>
            <Input/>
        </div>
    );
};

export default User;