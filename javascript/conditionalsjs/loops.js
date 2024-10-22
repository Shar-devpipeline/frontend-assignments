// ASSIGNMENT 1

for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

// ASSIGNMENT 2
function getValues(arr, indeces) {
  const values = [];

  for (let i = 0; i < indeces.length; i++) {
    const index = indeces[i];
    if (index >= 0 && index < arr.length) {
      values.push(arr[index]);
    }
  }
  return values;
}
const arr = ["a", "b", "c", "d", "f", "f", "e", "f"];
const indices = [1, 5, 3];
console.log(getValues(arr, indices));

// ASSIGNMENT 3
number = 251354812;

function numToArray(number) {
  convertToString = number.toString();
  digits = [];

  for (let i = 0; i < convertToString.length; i++) {
    digits.push(Number(convertToString[i]));
  }
  console.log(digits);
}
numToArray(number);

// CHALLENGE #1

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

let newMatrix = [];

for (let i = 0; i < arrayOne.length; i++) {
  for (let item = 0; item < arrayTwo.length; item++) {
    newMatrix.push([arrayOne[i], arrayTwo[item]]);
    newMatrix.push([arrayTwo[item], arrayOne[i]]);
  }
}

console.log(newMatrix);
