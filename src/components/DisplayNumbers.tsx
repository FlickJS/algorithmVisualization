import React from 'react';
import classes from '../assets/css/DisplayNumbers.module.css';

type DisplayNumbersProps = {
    numbers: number[];
};

const DisplayNumbers = (props: DisplayNumbersProps) => {
    return (
        <div className={classes.displayNumbers}>
            {props.numbers.map((number: number, index: number) => (
                <div key={index} className={classes.numberBar} style={{height: `${number}px`}}>
                    <span className={classes.number__label}>{number}</span>
                </div>
            ))}
        </div>
    )
}

export default DisplayNumbers;