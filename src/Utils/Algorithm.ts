// Plik Algorithm.ts
class Algorithm {
    private array: number[];
    private steps: number[][] = []; // kroki

    constructor(array: number[]) {
        this.array = array;
    }

    quickSort(left: number = 0, right: number = this.array.length - 1) {
        if (left < right) {
            let pivotIndex = this.partition(left, right);

            // recursively sort elements on the left and right of the pivot
            this.quickSort(left, pivotIndex - 1);
            this.quickSort(pivotIndex + 1, right);
        }
        return this.steps;
    }

    private partition(left: number, right: number): number {
        let pivotElement = this.array[right];
        let pivotIndex = left;

        for (let i = left; i < right; i++) {
            if (this.array[i] < pivotElement) {
                this.swap(i, pivotIndex);
                pivotIndex++;
            }
        }

        this.swap(pivotIndex, right);
        this.steps.push([...this.array]); // dodajemy krok
        return pivotIndex;
    }

    private swap(i: number, j: number) {
        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }
}
export default Algorithm;
