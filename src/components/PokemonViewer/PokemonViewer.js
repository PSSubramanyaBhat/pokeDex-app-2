import Loader from "../Loader/Loader";
import PokemonView from "../PokemonView/PokemonView";
import PropTypes from "prop-types";
import React from "react";
import styles from "./PokemonViewer.module.css";

const PokemonViewer = ({ pokemonData, status = "idle" }) => {
  return (
    <div className={styles.PokemonViewer}>
      {status === "idle" && <div className={styles.HintStyle}> Idle: Please search for a pokemon</div>}
      {status === "loading" && (
        <div className={styles.LoaderBoundary}>
          <Loader />
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
