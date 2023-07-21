import React from 'react';

const Button = (props: any) => {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;