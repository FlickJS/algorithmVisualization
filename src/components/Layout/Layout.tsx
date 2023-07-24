import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import DisplayNumbers from '../DisplayNumbers';
import Algorithm from '../../Utils/Algorithm';

import classes from '../../assets/css/Layout.module.css';

const Layout = (props: any) => {
    const [sortingArray, setSortingArray] = useState<number[]>([]);
    const [sortingSteps, setSortingSteps] = useState<number[][]>([]);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);

    const generateNumbersHadler = () => {
        setSortingArray([]);
        for (let i = 0; i < inputValue; i++) {
            setSortingArray((prevArray) => [...prevArray, Math.floor(Math.random() * 100)]);
        }
        setIsSorting(false);
        setSortingSteps([]);
        setStepIndex(0);
    }

    const sortingNumbersHandler = () => {
        const algorithm = new Algorithm([...sortingArray]);
        setSortingSteps(algorithm.quickSort());
        setIsSorting(true);
    }

    const stopSortingHandler = () => {
        setIsSorting(false);
    }

    useEffect(() => {
        if (isSorting && stepIndex < sortingSteps.length) {
            const timeout = setTimeout(() => {
                setSortingArray(sortingSteps[stepIndex]);
                setStepIndex(stepIndex + 1);
            }, 500); 
            return () => clearTimeout(timeout); 
        } else if (stepIndex >= sortingSteps.length) {
            setIsSorting(false);
        }
    }, [isSorting, stepIndex, sortingSteps]);

    return (
        <div>
            <DisplayNumbers numbers={sortingArray}></DisplayNumbers>
            <div className={classes.container__layout}>
                <span className={classes.main__text}>Enter amount of numbers to be generated:</span>
                <Input value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(Number(e.target.value))}></Input>
                <Button onClick={generateNumbersHadler} text={"Generate Numbers"}></Button>
                <Button onClick={sortingNumbersHandler} text={"Start Sorting"}></Button>
                <Button onClick={stopSortingHandler} text={"Stop Sorting"}></Button>
            </div>
        </div>
    )
}

export default Layout;
