import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import lget from "lodash/get";
import styles from "./PokemonView.module.css";

const PokemonView = ({ pokemon }) => {

  // const [pokeMoves, setPokeMoves] = useState([]);
  // const [pokeAbility, setPokeAbility] = useState([]);
  // const [pokeType, setPokeType] = useState([]);

  const move_arr = [];
  const abilitiy_arr = [];
  const type_arr = [];

  let pokemonImageURL = lget(
    pokemon,
    "sprites.other.official-artwork.front_default"
  );

  let pokemonIDValue = lget(
    pokemon,
    "id"
  );

  // CODE FOR POKEDETAILS.....

  let pokemonName = lget(
    pokemon,
    "name"
  );

  let pokemonHeight = lget(
    pokemon,
    "height"
  );

  let pokemonWeight = lget(
    pokemon,
    "weight"
  );

  let pokemonBaseExperience = lget(
    pokemon,
    "base_experience"
  );

  let pokemonMoves = lget(
    pokemon,
    "moves"
  );

  let pokemonAbilities = lget(
    pokemon,
    "abilities"
  );

  let pokemonTypes = lget(
    pokemon,
    "types"
  );

  for (let i = 0; i < pokemonTypes.length; i++) {
    let resultTypeValue = pokemonTypes[i].type.name;
    type_arr.push(resultTypeValue);
    console.log("TYPE ARRAY...", type_arr);
  }


  for (let i = 0; i < 2; i++) {
    let resultValue = pokemonMoves[i].move.name;
    move_arr.push(resultValue);
    // setPokeMoves([...move_arr, resultValue]); //SEMI WORKING......
  }

  if (pokemonAbilities.length === 1) {
    let abilityResultValue = pokemonAbilities[0].ability.name;
    abilitiy_arr.push(abilityResultValue);
    // setPokeAbility([...abilitiy_arr, abilityResultValue]); //SEMI WORKING......
  } else {
    for (let i = 0; i < 2; i++) {
      let abilityResultValue = pokemonAbilities[i].ability.name;
      abilitiy_arr.push(abilityResultValue);
      // setPokeAbility([...abilitiy_arr, abilityResultValue]); //SEMI WORKING......
    }
  }




  if (!pokemonIDValue) {
    throw Error("Failed to fetch the data!");
  }

  if (!pokemonImageURL) {
    throw Error("Failed to fetch the image of the pokemon");
  }

  return (
    <div className={styles.PokemonCard}>
      <div className={styles.PokemonView}>
        <img
          className={styles.PokemonImage}
          src={pokemonImageURL}
          alt="Pokemon"
        ></img>
        {/* <div>{pokemonIDValue}</div> */}
      </div>
      <div className={styles.PokemonInfo}>
        <p className={styles.PokeName}>{pokemonName}</p>
        <p><b>#</b>{pokemonIDValue}</p>
        <p><b>Height: </b> {pokemonHeight}</p>
        <p><b>Weight: </b> {pokemonWeight}</p>
        <p><b>HP: </b> {pokemonBaseExperience}</p>
        <p><b>Types: </b> </p>
        <p className={styles.PokeArr}>
          {type_arr.map((types) => {
            return (
              <p>{types}</p>
            )
          })}
        </p>
        <p><b>Moves: </b> </p>
        <p className={styles.PokeArr}>
          {move_arr.map((movesValue) => {
            return (
              <p>{movesValue}</p>
            )
          })}
        </p>
        <p><b>Ability: </b> </p>
        <p className={styles.PokeArr}>
          {abilitiy_arr.map((abilityValue) => {
            return (
              <p>{abilityValue}</p>
            )
          })}
        </p>
      </div>
    </div>
  );
};

PokemonView.propTypes = {};

// export default {PokemonView, pokemonIDValue};
export default PokemonView;
