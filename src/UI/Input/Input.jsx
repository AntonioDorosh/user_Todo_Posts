import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setFirstName,
    setLastName
} from "../../components/store/UserReducer/UserSlice";

const Input = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.user.firstName)
    const lastName = useSelector(state => state.user.lastName);
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder='First Name' onChange={(e) => dispatch(setFirstName(e.target.value))}/>
                <span>firstname: {name}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder='Second Name' onChange={(e) => dispatch(setLastName(e.target.value))}/>
                <span>Lastname: {lastName}</span>
            </div>
        </div>
    );
};

export default Input;