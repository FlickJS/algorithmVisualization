import React from 'react';

import classes from '../../assets/css/Button.module.css';

const Button = (props: any) => {
    return (
        <button className={classes.button} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;