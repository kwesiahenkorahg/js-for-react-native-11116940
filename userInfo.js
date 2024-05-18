// Task 3
const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const names = ["Michael", "Adjoa", "Charles", "Jessica", "Yvette"];
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers); 
const modifiedNames = formatArrayStrings(names, processedNumbers);

const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);

module.exports = createUserProfiles;
