function longestWord(words) {
  if (words.length === 0) {
    return None;
  }

  return words.reduce((longest, current) => {
    console.log(current.length > longest.length ? current : longest);
  });
}

// ASSIGNMENT #2

function swap(str) {
  const first = str.charAt(0);
  const last = str.charAt(str.length - 1);
  const middle = str.slice(1, str.length - 1);

  const swapped = last + middle + first;
  console.log(swapped);
}

swap("hello");
swap("ryan");

// ASSIGNMENT #3

const numbers = [1, 2, 3];

function sumList(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumList(numbers);

// ASSIGNMENT #4

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

function combining(arrayOne, arrayTwo) {
  const combined = [];

  const maxLength =
    arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;

  for (let i = 0; i < maxLength; i++) {
    if (i < arrayOne.length) {
      combined.push(arrayOne[i]);
    }
    if (i < arrayTwo.length) {
      combined.push(arrayTwo[i]);
    }
  }
  console.log(combined);
}

combining(arrayOne, arrayTwo);

// ASSIGNMENT #5

function titleCase(str) {
  const titleCased = str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  console.log(titleCased);
}

titleCase("What happened to all the rabbits?");

// ASSIGNMENT #6

function longest(sentence) {
  const sepWords = sentence.split(" ");
  const checkLongest = "";

  for (let word of sepWords) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
}

longest("Hello old friend how have you been");

// ASSIGNMENT #7

function toAlpha(str) {
  const arrayOne = str.split("");

  result = arrayOne.sort().join("");

  whitesp = result.replace(/\s+/g, "");

  return whitesp;
}

console.log(toAlpha("this is a really long sentence lets see how it does"));

// ASSIGNMENT #8

const arrOne = ["a", "b", "c", "d"];
const indecesOne = [1, 3];

function getLettersAtIndeced(arr, indices) {
  const newArr = [];

  for (let i of indices) {
    if (i >= 0 && i < arr.length) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(getLettersAtIndeced(arrOne, indecesOne));

// ASSIGNMENT #9

const user = {
  userName: "alkatraz",
  activeStatus: "away",
};

const changeStatus = (user) => {
  user.activeStatus = "active";
  return `${user.userName} is ${user.activeStatus}`;
};

console.log(changeStatus(user));

// ASSIGNMENT #10

function powerOf(base, exp) {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

console.log(powerOf(9, 2));
