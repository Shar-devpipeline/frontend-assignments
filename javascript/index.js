// Program that checks to see if input is a string, true or false

const variableOne = "Hello";
const variableTwo = 2398;

const isString = typeof variableOne === "string";
const isStringTwo = typeof variableTwo === "string";

console.log(isString);
console.log(isStringTwo);

// Is a string blank, true or false

const strVar = "";
const strVarTwo = "Well Hello";

const isBlank = strVar.trim() === "";
const isBlankTwo = strVarTwo.trim() === "";

console.log(isBlank);
console.log(isBlankTwo);

// Capitalizes first character of a string

const note = "here is a sentence!";

const capitalizeFirst = note.charAt(0).toUpperCase() + note.slice(1);
console.log(capitalizeFirst);

// Abbreviation

const fullName = "Sharlane Hess";
const both = fullName.split(" ");
const abbr = `${both[0]} ${both[1].charAt(0)}.`;
console.log(abbr);

// Truncate

const sentence = "Here is a long sentence that I would like to Truncate";
const length = 6;
const trunc = sentence.substring(0, length);
console.log(trunc + "...");

// Slice to return part of string

const str = "The practitioners grappled on the road side!";
const half = str.slice(18, -1);
console.log(half);
