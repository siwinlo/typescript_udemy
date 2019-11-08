// we annotate every argument, as well as the type of what the function returns
// typescript can check the type but not the logic

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function(a: number, b: number): number {
  return a * b;
};

//void and never
const logger = (message: string): void => {
  // this function doesn't return anything so we use "void" to tell TS that
  console.log(message);
};

const throwError = (message: string): never => {
  // this tells TS that this function will never complete, but this is rare
  throw new Error(message);
};

// destructuring with annotations

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

// the destructing and the annotations of the properties are separated by a colon
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
