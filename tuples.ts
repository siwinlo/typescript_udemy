const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ["brown", true, 40]; // by specifying the sequence of types, we make this a tuple and not an array

// creating a type alias
type Drink = [string, boolean, number]; // this doesn't create an array, but a type that is a tuple

const sprite: Drink = ["clear", true, 70];
const tea: Drink = ["brown", false, 100];

// Tuples are limited because the meaning of these numbers is still unclear, only their types
const carSpecs: [number, number] = [400, 3354];

// keys help us understand what these numbers represent, hence the popularity of objects in JS
const carStats = {
  horsepower: 400,
  weight: 3354
};
