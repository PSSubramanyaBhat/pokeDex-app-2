import Loader from "../Loader/Loader";
import PokemonView from "../PokemonView/PokemonView";
import React, { Suspense } from "react";
import styles from "./PokemonViewer.module.css";

// const Loader = React.lazy(() => import('../Loader/Loader'));

export enum Status {
  Idle = "idle",
  Loading = "loading",
  Resolved = "resolved",
  Error = "error",
}

// type Status = 'idle' | 'loading' | 'resolved' | 'error';  //Method 4......

export interface PokemonProps {
  /**This represents the payload that you received for the backend */
  pokemonData: object | undefined;
  /**This is the status of the component */
  status: string; //this is in general......  //Method 1......
  // status: 'idle' | 'loading' | 'resolved' | 'error';    //Method 2......
  // status: Status  //Method 3......
}

// const PokemonViewer = ({ pokemonData, status = "idle" }: PokemonProps) => {//Methos 1 and 2
//Method 3 below......
const PokemonViewer = ({ pokemonData, status = Status.Idle }: PokemonProps) => {
  return (
    <div className={styles.PokemonViewer}>
      {status === Status.Idle && (
        <div className={styles.HintStyle}>
          <img
            className={styles.IdleStatusImage}
            src="https://cdn0.iconfinder.com/data/icons/movies-11/32/pokemon_movie_cinema_ball_pokeball-512.png"
            alt="Search for Pokemons"
          />
          <p>Idle: Please search for a pokemon</p>
        </div>
      )}
      {status === Status.Loading && (
        <div className={styles.LoaderBoundary}>
          <Loader />
          {/* <Suspense fallback={<div>Loading the loader!...</div>}>
            <Loader />
          </Suspense> */}
        </div>
      )}
      {status === Status.Resolved && <PokemonView pokemon={pokemonData} />}
      {/* {status === "resolved" && <PokemonView pokemon={pokemonData} />} */}
      {status === Status.Error && (
        // <div className={styles.error}>
        <div className={styles.Error}>
          {" "}
          Error: There was an error fetching the pokemon{" "}
        </div>
      )}
    </div>
  );
};

PokemonViewer.propTypes = {};

export default PokemonViewer;

//START FROM TIME STAMP 33:00 and ask Mayur and Sri and start from 44:00......

/*
8/12/2020 PLANS......
Finish 2/12 ---> DONE
then Finish 3/12
the do HTML 3/10 of section 10
then Finish 4/12
Attend class
finish 4/12
finish 5/12 ---> DONE
walking and talking
then finish html section 10 and 11
*/
