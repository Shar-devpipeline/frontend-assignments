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

largestNum(15, 15);

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
