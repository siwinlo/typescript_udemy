import { User } from "./models/User";

const user = new User({ name: "bulbasaur", age: 0 });
user.events.on("change", () => {
  console.log("CHANGE");
});

user.events.trigger("change");
