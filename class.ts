class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("BEEP");
  }
}

class Spaceship extends Vehicle {
  constructor(public engines: number, color: string) {
    super(color);
  }
  private drive() {
    // private restricts access to a function, restricts different methods that other developers can call
    console.log("** take off **"); // overriding a method on the child class Spaceship which extends parent class Vehicle
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const spaceship = new Spaceship(2, "silver");
spaceship.startDrivingProcess();
