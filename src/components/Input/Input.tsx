import React, { useState, FocusEvent, ChangeEvent } from 'react';
import classes from '../../assets/css/Input.module.css';

interface InputProps {
  value: number;
  onChange: (value: number) => void;
}

const Input: React.FC<InputProps> = (props) => {
    const [inputValue, setInputValue] = useState<number>(props.value);


    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        if (event.target.value === '0') {
            setInputValue(0);
        }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setInputValue(props.value);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(event.target.value));
        props.onChange(Number(event.target.value));
    }

    return (
        <input 
            className={classes.input} 
            type="number" 
            value={inputValue.toString()} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    )
}

export default Input;
