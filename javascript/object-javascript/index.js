// FIRST CHALLENGE

const employee = {
  id: 84629,
  name: "Julie Peterson",
  age: 24,
  dob: "07-19-2000",
  gradesCompleted: [9, 10, 11, 12],
  school: {
    name: "North Sanpete Highschool",
    phoneNumber: 435 - 462 - 2475,
    city: "Mt. Pleasant",
    "delete me": "This is going to be gone",
  },
};

console.log(
  `Person ${employee.id} has been through ${employee.gradesCompleted} from ${employee.school.name} and is now ${employee.age}.`
);
console.dir(employee);

delete employee.school["delete me"];
console.log(employee);

// SECOND CHALLENGE

const user = {
  firstName: "Sharlane",
  lastName: "Hess",
  city: "Fairview",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters["semesterOne"] = "complete";
console.log(user);

delete user.semesters["semesterFour"];
console.log(user);

user.favoriteLanguage = "Python";
console.log(user);
console.dir(user);

// CHALLENGE 3

const alternating = {
  array: [1, 2, 3, 4, 5],
  callCount: 0,
};

while (alternating.array.length > 0) {
  let value;
  if (alternating.callCount % 2 === 0) {
    value = alternating.array.shift();
  } else {
    value = alternating.array.pop();
  }

  console.log(value);
  alternating.callCount++;
}

if (alternating.array.length === 0) {
  console.log(undefined);
}
