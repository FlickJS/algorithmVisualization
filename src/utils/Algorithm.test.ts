import Algorithm from './Algorithm';

describe('Algorithm test', () => {
    it('correctly sorts an array of numbers', () => {
        const numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
        const algorithm = new Algorithm(numbers);
        const sortedNumbersSteps = algorithm.quickSort();
        const lastStep = sortedNumbersSteps[sortedNumbersSteps.length - 1];
        expect(lastStep).toEqual(numbers.sort((a, b) => a - b));
    });

});