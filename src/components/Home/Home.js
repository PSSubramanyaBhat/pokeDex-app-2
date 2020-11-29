// import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import lget from "lodash/get";
// import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundary from "../../ErrorBoundary";
import PokemonViewer from "../../components/PokemonViewer";
import SearchField from "../../components/SearchField/SearchField";
// import { fetchAPokemon } from "./api";
import { fetchAPokemon } from "../../api/api";
// import NavBar from "./components/NavBar/NavBar";

const Home = (props) => {
  // return <div className={styles.Home}></div>;

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
    // <div className="App">
    <div className={styles.Home}>
      {/* <NavBar /> */}
      <SearchField
        onSearchClicked={(search) => setSearchTerm(search)}
        pokemonIDValue={pokemonIDValue}
      />
      <ErrorBoundary>
        <PokemonViewer pokemonData={pokemon} status={status} />
      </ErrorBoundary>
    </div>
  );
};

Home.propTypes = {};

export default Home;
