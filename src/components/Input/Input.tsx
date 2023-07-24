import React from 'react';

const Input = (props: any) => {
    return (
        <input className="form-control" type="number"  value={props.value} onChange={props.onChange}></input>
    )
}

export default Input;