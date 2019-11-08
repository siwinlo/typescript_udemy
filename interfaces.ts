interface Reportable {
  summary(): string;
}

const beverage = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  // this function now requires an interface with the properties of Vehicle
  console.log(item.summary());
};

printSummary(beverage);
printSummary(oldCivic);
