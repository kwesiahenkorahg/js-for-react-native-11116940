// Task 1
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

// Task 2
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const inputStrings = ["My", "Name", "Is", "Paa", "Kwesi"];
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings);