import React from 'react';

type DisplayNumbersProps = {
    numbers: number[];
  };

const DisplayNumbers = ({ numbers }: DisplayNumbersProps) => {
    return (
        <div>
            {numbers.map((number, index) => (
                <div key={index}>{number}</div>
            ))}
        </div>
    )
}

export default DisplayNumbers;