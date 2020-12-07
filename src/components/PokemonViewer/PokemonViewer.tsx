import Loader from "../Loader/Loader";
import PokemonView from "../PokemonView/PokemonView";
import React, { Suspense } from "react";
import styles from "./PokemonViewer.module.css";

// const Loader = React.lazy(() => import('../Loader/Loader'));

interface PokemonProps {
  pokemonData: object,
  status: string
}

const PokemonViewer = ({ pokemonData, status = "idle" }: PokemonProps) => {
  return (
    <div className={styles.PokemonViewer}>
      {status === "idle" && (
        <div className={styles.HintStyle}>
          <img
            className={styles.IdleStatusImage}
            src="https://cdn0.iconfinder.com/data/icons/movies-11/32/pokemon_movie_cinema_ball_pokeball-512.png"
            alt="Search for Pokemons"
          />
          <p>Idle: Please search for a pokemon</p>
        </div>
      )}
      {status === "loading" && (
        <div className={styles.LoaderBoundary}>
          <Loader />
          {/* <Suspense fallback={<div>Loading the loader!...</div>}>
            <Loader />
          </Suspense> */}
        </div>
      )}
      {status === "resolved" && <PokemonView pokemon={pokemonData} />}
      {status === "error" && (
        <div className={styles.error}>
          {" "}
          Error: There was an error fetching the pokemon{" "}
        </div>
      )}
    </div>
  );
};

PokemonViewer.propTypes = {};

export default PokemonViewer;
