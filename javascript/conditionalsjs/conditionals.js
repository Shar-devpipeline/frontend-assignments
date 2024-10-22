// ASSIGNMENT NUMBER 1

objectOne = {
  id: 1,
  name: "ryan",
};

objectTwo = {
  address: "123 fake st",
  phone: "555-555-5555",
};

objectThree = Object.assign({}, objectOne, objectTwo);

console.log(objectThree);

// Copies properties from a source object to a target object
// Object.assign(target, source)

// ASSIGNMENT NUMBER 2

function largestNum(numOne, numTwo) {
  if (numOne > numTwo) {
    console.log(`${numOne} is the largest`);
  } else if (numOne < numTwo) {
    console.log(`${numTwo} is the largest`);
  } else {
    console.log("They are equal");
  }
}

largestNum(9, 15);

function largestNum(numOne, numTwo) {
  numOne > numTwo
    ? console.log(`${numOne} is the largest`)
    : numOne < numTwo
    ? console.log(`${numTwo} is the largest`)
    : console.log("They are equal");
}

// ASSIGNMENT NUMBER 3

function titleCase(sentence) {
  const titleCased = sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  console.log(titleCased);
}

titleCase("hello from all of us crazy people");

// ASSIGNMENT NUMBER 4

function toAlpha(str) {
  const arrayOne = str.split("");

  result = arrayOne.sort().join("");

  whitesp = result.replace(/\s+/g, "");

  return whitesp.toUpperCase();
}

console.log(toAlpha("this is a really long sentence lets see how it does"));
