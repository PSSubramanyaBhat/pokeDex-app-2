import "./App.css";

import React, { useEffect, useState } from "react";
import lget from "lodash/get";
import ErrorBoundary from "./ErrorBoundary";
import PokemonViewer from "./components/PokemonViewer/PokemonViewer";
import SearchField from "./components/SearchField/SearchField";
import { fetchAPokemon } from "./api";
import NavBar from "./components/NavBar/NavBar";

// const BASE_URL = "https://pokeapi.co/api/v2/";
// `${BASE_URL}pokemon?limit=10&offset=200`

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(undefined);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (searchTerm === "") {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    fetchAPokemon(searchTerm)
      .then((pokemon) => {
        setPokemon(pokemon);
        setStatus("resolved");
      })
      .catch((error) => {
        //process the error
        setStatus("error");
      });
  }, [searchTerm]);

  let pokemonIDValue = lget(pokemon, "id");

  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBar />
      <SearchField
        onSearchClicked={(search) => setSearchTerm(search)}
        pokemonIDValue={pokemonIDValue}
      />
      <ErrorBoundary>
        <PokemonViewer pokemonData={pokemon} status={status} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
