import { fetchAPokemon, fetchPokemonURL } from "./api";

import lget from "lodash/get";

const BASE_URL_STRING = "https://pokeapi.co/api/v2/";

it("fetchPokemon test", async () => {
  jest.setTimeout(300000);

  const ditto = "ditto";

  return fetchAPokemon(ditto).then((json) => {
    expect(json).not.toBeNull();
    //let front_artwork = json?.sprites?.other?.official-artwork?.front_default;
    //json?.sprites?.other?.["official-artwork"]?.front_default

    // const sprites = json.sprites;
    // expect(sprites).not.toBeUndefined();
    // const other = sprites.other;
    // expect(other).not.toBeUndefined();
    // const official_artwork = other['official-artwork'];
    // expect(official_artwork).not.toBeUndefined();
    // const front_default = official_artwork.front_default;

    const front_default = lget(
      json,
      "sprites.other.official-artwork.front_default"
    );

    // const pokemonID = lget(
    //   json,
    //   "id"
    // );
    expect(front_default).not.toBeUndefined();
    // expect(pokemonID).not.toBeUndefined();
  }, 30000);
});

// async function suggestPokemons(pokemonName) {
//   //The url to fetch 10 pokemons based on current pokemon...

//   const pokeMonSuggestionURL = `${BASE_URL_STRING}pokemon/limit=100&offset=200`;
//   return await fetchPokemonURL(pokeMonURL);
// }

it("fetchPokemon test - non existent character", async () => {
  console.log(process.env.NODE_ENV);
  jest.setTimeout(300000);
  const nonExistent = "dittoss";
  expect.assertions(1);
  return fetchAPokemon(nonExistent).catch((error) => {
    expect(error).not.toBeNull();
  });
});

it("fetchPokemon test - ditto character", async () => {
  console.log(process.env.NODE_ENV);
  jest.setTimeout(300000);
  const nonExistent = "ditto";
  expect.assertions(0);
  return fetchAPokemon(nonExistent).catch((error) => {
    expect(error).not.toBeNull();
  });
});
