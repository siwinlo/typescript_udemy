let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

// the name of the type is sometimes also the type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array

// an array of strings
let colors: string[] = ["red", "green", "blue"];

// an array of numbers
let myNumbers: number[] = [1, 2, 4, 50];

// array of booleans
let truths: boolean[] = [true, true, false];

// Classes

class Car {}

// car will be an instance of Car
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

// these type annotations tell TS what type the variables might be
// what arguments are going into the argument, what what value the function returns
// everything on the left of the '=' is the annotatation, on the right of the '=' is the implementation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations?
// 1. Function that returns the 'any' type
//  JSON.parse() doesn't specify a type, so it automatically gives us the 'any' type
// avoid using 'any' because it prevents TS from doing error checking

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // we add a type for the properties of "coordinates" since JSON.parse() usually returns 'any'
console.log(coordinates);

// 2. when we declare a variable on one line and initialize it on another

let words = ["red", "green", "blue"];
let foundWord; // we declare this here but we don't give it a value until later; this give a TS warning

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. when we want a variable to have a type that cannot be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // the '|' means numberAboveZero can be a boolean or a number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
