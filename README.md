# Kwesi Ahenkorah Gyamenah - 11116940

# Array Manipulation and User Profile Creation

This project contains three main tasks that demonstrate array manipulation and object creation in JavaScript. The tasks are implemented across two files: `arrayManipulation.js` and `userInfo.js`.

## Tasks Overview

### Task 1: Process Array

**File:** `arrayManipulation.js`

**Function:** `processArray(numbers)`

**Description:**
The `processArray` function takes an array of numbers as input and returns a new array where:

- Each even number is squared.
- Each odd number is tripled.

**Example Usage:**

```javascript
const processedNumbers = processArray([1, 2, 3, 4, 5]);
// Output: [3, 4, 9, 16, 15]
```

### Task 2: Format Array Strings

**File:** `arrayManipulation.js`

**Function:** `formatArrayStrings(strings, numbers)`

**Description:**
The `formatArrayStrings` function takes two arrays as input: an array of strings and an array of numbers (processed by `processArray`). It returns a new array of strings where:

- Each string is capitalized if the corresponding number is even.
- Each string is converted to lowercase if the corresponding number is odd.

**Example Usage:**

```javascript
const strings = ["My", "Name", "Is", "Paa", "Kwesi"];
const processedNumbers = processArray([1, 2, 3, 4, 5]); // [3, 4, 9, 16, 15]
const formattedStrings = formatArrayStrings(strings, processedNumbers);
// Output: ["my", "NAME", "is", "PAA", "kwesi"]
```

### Task 3: Create User Profiles

**File:** `userInfo.js`

**Function:** `createUserProfiles(names, modifiedNames)`

**Description:**
The `createUserProfiles` function takes two arrays as input: an array of original names and an array of modified names (processed by `formatArrayStrings`). It returns an array of objects where each object contains:

- `id`: Auto-incremented ID starting from 1.
- `originalName`: The original name from the input array.
- `modifiedName`: The modified name from the input array.

**Example Usage:**

```javascript
const names = ["Michael", "Adjoa", "Charles", "Jessica", "Yvette"];
const processedNumbers = processArray([1, 2, 3, 4, 5]); // [3, 4, 9, 16, 15]
const modifiedNames = formatArrayStrings(names, processedNumbers); // ["michael", "ADJOA", "charles", "JESSICA", "yvette"]
const userProfiles = createUserProfiles(names, modifiedNames);
// Output:
// [
//   { id: 1, originalName: 'Michael', modifiedName: 'michael' },
//   { id: 2, originalName: 'Adjoa', modifiedName: 'ADJOA' },
//   { id: 3, originalName: 'Charles', modifiedName: 'charles' },
//   { id: 4, originalName: 'Jessica', modifiedName: 'JESSICA' },
//   { id: 5, originalName: 'Yvette', modifiedName: 'yvette' }
// ]
```

## File Structure

- **arrayManipulation.js**: Contains the `processArray` and `formatArrayStrings` functions.
- **userInfo.js**: Contains the `createUserProfiles` function and demonstrates how to use the functions from `arrayManipulation.js`.

## How to Run

1. **Install Node.js** (if not already installed) from [nodejs.org](https://nodejs.org/).
2. **Clone the repository** to your local machine.
3. **Navigate to the project directory** in your terminal.
4. **Run the example code** by executing:
   ```bash
   node userInfo.js
   ```

This will run the example usage and print the output to the console.
