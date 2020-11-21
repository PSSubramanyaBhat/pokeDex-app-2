import PropTypes from "prop-types";
import React from "react";
import lget from "lodash/get";
import styles from "./PokemonView.module.css";

const PokemonView = ({ pokemon }) => {
  let pokemonImageURL = lget(
    pokemon,
    "sprites.other.official-artwork.front_default"
  );

  let pokemonIDValue = lget(
    pokemon,
    "id"
  );

  if (!pokemonIDValue) {
    throw Error("Failed to fetch the data!");
  }

  if (!pokemonImageURL) {
    throw Error("Failed to fetch the image of the pokemon");
  }

  return (
    <div className={styles.PokemonView}>
      <img
        className={styles.PokemonImage}
        src={pokemonImageURL}
        alt="Pokemon"
      ></img>
      {/* <div>{pokemonIDValue}</div> */}
    </div>
  );
};

PokemonView.propTypes = {};

// export default {PokemonView, pokemonIDValue};
export default PokemonView;
