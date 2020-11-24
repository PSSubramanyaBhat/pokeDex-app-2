import React from "react";
import PropTypes from "prop-types";
import lget from "lodash/get";
import styles from "./Favourites.module.css";
import ErrorBoundary from "../../ErrorBoundary";
import PokemonViewer from "../../components/PokemonViewer/PokemonViewer";
import { readFromStorage, writeToStorage } from "../../LocalStorage";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FAVOURITE = "favoriteList";
const DispFavourites = [];
const sampleDisplayValue = readFromStorage(FAVOURITE);
for (let i = 0; i < sampleDisplayValue.length; i++) {
  DispFavourites.push(sampleDisplayValue[i].name);
}

const move_arr = [];
const abilitiy_arr = [];
const type_arr = [];

const firstPokemon = sampleDisplayValue[1]; //SIMILARLY DISPLAY OTHER INFORMATIOIN AS WELL......

let pokemonImageURL = lget(
  firstPokemon,
  "sprites.other.official-artwork.front_default"
);

let pokemonIDValue = lget(firstPokemon, "id");

// CODE FOR POKEDETAILS.....

let pokemonName = lget(firstPokemon, "name");
let pokemonHeight = lget(firstPokemon, "height");
let pokemonWeight = lget(firstPokemon, "weight");
let pokemonBaseExperience = lget(firstPokemon, "base_experience");
let pokemonMoves = lget(firstPokemon, "moves");
let pokemonAbilities = lget(firstPokemon, "abilities");
let pokemonTypes = lget(firstPokemon, "types");

for (let i = 0; i < pokemonTypes.length; i++) {
  let resultTypeValue = pokemonTypes[i].type.name;
  type_arr.push(resultTypeValue);
}

if (pokemonMoves.length === 1) {
  let resultValue = pokemonMoves[0].move.name;
  move_arr.push(resultValue);
} else {
  for (let i = 0; i < 2; i++) {
    let resultValue = pokemonMoves[i].move.name;
    move_arr.push(resultValue);
  }
}

if (pokemonAbilities.length === 1) {
  let abilityResultValue = pokemonAbilities[0].ability.name;
  abilitiy_arr.push(abilityResultValue);
} else {
  for (let i = 0; i < 2; i++) {
    let abilityResultValue = pokemonAbilities[i].ability.name;
    abilitiy_arr.push(abilityResultValue);
  }
}

if (!pokemonIDValue) {
  throw Error("Failed to fetch the data!");
}

if (!pokemonImageURL) {
  throw Error("Failed to fetch the image of the pokemon");
}

const Favourites = (props) => {
  return (
    <div className={styles.Favourites}>
      {/* <ErrorBoundary>
        <PokemonViewer pokemonData={sampleDisplayValue[0]} status={status} />
      </ErrorBoundary> */}

      {/* {DispFavourites} */}
      {/* {sampleDisplayValue[0]} */}

      {/* {DispFavourites.map((name, index) => {
        <p key={index}>{name}</p>;
        console.log("SAKURA UCHIHA", name);
      })} */}

      <BiChevronLeft className={styles.chevronLeftIcon} />

      <div className={styles.FavouritePokemonCard}>
        <div className={styles.FavouritePokemonView}>
          <img
            className={styles.FavouritePokemonImage}
            src={pokemonImageURL}
            alt="Pokemon"
          ></img>
        </div>
        <div className={styles.FavouritePokemonInfo}>
          <p className={styles.FavouritePokeName}>{pokemonName}</p>
          <p>
            <b>#</b>
            {pokemonIDValue}
          </p>
          <p>
            <b>Height: </b> {pokemonHeight}
          </p>
          <p>
            <b>Weight: </b> {pokemonWeight}
          </p>
          <p>
            <b>HP: </b> {pokemonBaseExperience}
          </p>
          <p>
            <b>Types: </b>{" "}
          </p>
          <p className={styles.FavouritePokeArr}>
            {type_arr.map((types, idx) => {
              return <p key={idx}>{types}</p>;
            })}
          </p>
          <p>
            <b>Moves: </b>{" "}
          </p>
          <p className={styles.FavouritePokeArr}>
            {move_arr.map((movesValue, idx) => {
              return <p key={idx}>{movesValue}</p>;
            })}
          </p>
          <p>
            <b>Ability: </b>{" "}
          </p>
          <p className={styles.FavouritePokeArr}>
            {abilitiy_arr.map((abilityValue, idx) => {
              return <p key={idx}>{abilityValue}</p>;
            })}
          </p>
        </div>
      </div>

      <BiChevronRight className={styles.chevronRightIcon} />
    </div>
  );
};

Favourites.propTypes = {};

export default Favourites;
