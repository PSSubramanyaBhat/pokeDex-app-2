import ditto from "./ditto.json";
const mocks = { ditto };

export function fetchPokemon(pokemonName) {
  return mocks[pokemonName];
}
