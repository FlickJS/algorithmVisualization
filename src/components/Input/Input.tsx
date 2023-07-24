import React from 'react';
import classes from   '../../assets/css/Input.module.css';

const Input = (props: any) => {
    return (
        <input className={classes.input} type="number" min="0" value={props.value} onChange={props.onChange}></input>
    )
}

export default Input;