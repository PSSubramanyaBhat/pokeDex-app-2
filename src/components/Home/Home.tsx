import PropTypes from "prop-types";
import styles from "./Home.module.css";
import React, { Suspense, useEffect, useRef, useState } from "react";
import lget from "lodash/get";
import ErrorBoundary from "../../ErrorBoundary";
import PokemonViewer from "../PokemonViewer"; //PERFECTLY WORKING...
// import PokemonViewer, { Types } from "../PokemonViewer"; //PERFECTLY WORKING...
import SearchField from "../SearchField/SearchField";
import { fetchAPokemon } from "../../api/api";

// let PokemonViewer = undefined;
// let PokemonViewer:React.ReactNode = null;
// let PokemonV iewer = null;

// const PokemonViewer = React.lazy(() => import('../../components/PokemonViewer'));//WOKRING FINE...

// const Home = (props) => {
const Home = () => {
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

  /*const mounted = useRef(false);
  useEffect(() => {

    if (mounted && mounted.current === false && searchTerm !== '') {
      PokemonViewer = React.lazy(() => import('../../components/PokemonViewer'));
      mounted.current = false;
    }
  }, [searchTerm]);
  */

  return (
    // <div className="App">
    <div className={styles.Home}>
      {/* <NavBar /> */}
      <SearchField
        onSearchClicked={(search) => setSearchTerm(search)}
        pokemonIDValue={pokemonIDValue}
      />
      <ErrorBoundary>
        {/* <PokemonViewer pokemonData={pokemon} status={status as Status} /> */}
        {/* <PokemonViewer pokemonData={pokemon} status={status} /> */}
        <PokemonViewer pokemonData={pokemon} status={status} />


        {/* <PokemonViewer pokemonData={pokemon} status={status as Types.Status} /> */}
      </ErrorBoundary>
    </div>
  );
};

Home.propTypes = {};

export default Home;
