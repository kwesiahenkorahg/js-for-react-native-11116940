function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); 

