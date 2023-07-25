import React from 'react';
import classes from '../../assets/css/Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className={classes.button} onClick={onClick}>{text}</button>
    );
};

export default Button;
