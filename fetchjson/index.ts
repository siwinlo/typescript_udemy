import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

//interfaces are used to define the structure of an object in TS
//this tells us that every ability will have these properties, and their types

interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
}

axios.get(url).then(response => {
  const data = response.data.abilities[0] as Abilities;

  const name = data.ability.name;
  const url = data.ability.url;
  const slot = data.slot;
  const hidden = data.is_hidden;

  logAbilities(name, hidden, slot, url);
});

const logAbilities = (
  name: string,
  hidden: boolean,
  slot: number,
  url: string
) => {
  console.log(
    `The ability ${name} at slot ${slot} can be found at ${url} and is hidden(${hidden})`
  );
};
