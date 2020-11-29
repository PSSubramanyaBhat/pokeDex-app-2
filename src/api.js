// const BASE_URL = "https://pokeapi.co/api/v2/";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://dev.pokeapi.co/api/v2/"
    : "https://pokeapi.co/api/v2/";

// process.env.REACT_APP_APIKEY = "Key";
// console.log("THE KEY is ... ", process.env.REACT_APP_APIKEY);

// const BASE_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemonURL(url) {
  let response = await fetch(url);

  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    // let json = await response.json();
    // console.log(json);
    return response.json();
  } else {
    //alert('HTTP-Error: ' + response.status);
    throw new Error("HTTP-Error: " + response.status);
  }
}

async function fetchAPokemon(pokemonName) {
  //The url to fetch a pokemon should have subpath: pokemon
  const pokeMonURL = `${BASE_URL}pokemon/${pokemonName}`;
  return await fetchPokemonURL(pokeMonURL);
}

export { fetchPokemonURL, fetchAPokemon };
