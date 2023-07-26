import React from 'react';
import classes from '../assets/css/DisplayNumbers.module.css';

const DisplayNumbers: React.FC<{ numbers: number[] }> = ({ numbers }) => {
    return (
        <div className={classes.displayNumbers}>
            {numbers.map((number, index) => (
                <div key={index} className={classes.numberBar} style={{height: `${number}px`}}>
                    <span className={classes.number__label}>{number}</span>
                </div>
            ))}
        </div>
    )
}

export default DisplayNumbers;
