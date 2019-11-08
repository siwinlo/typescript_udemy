const carMakers: string[] = [];
const dates = [new Date(), new Date()];

// 2D array
const carsByMake: string[][] = [
  // the double square brackets tell us that we have an array of arrays of strings
  ["prius"],
  ["accord"],
  ["corvette"]
];

// Typing arrays helps with inference when extracting values
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // this give us an error bc ts expects a string

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase(); // the annotation above gives us autocomplete on the variable being passed into .map()
});

// Multiple types in arrays, ie., flexible types
const importantDates: (Date | string)[] = [new Date(), "Christmas"];

// explicityly typing arrays is usually the most important with empty arrays, since without an annotation TS would use the 'any' type, which should be avoided
