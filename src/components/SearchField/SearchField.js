import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { on } from "process";
import lget from "lodash/get";
import { fetchPokemonURL, fetchAPokemon } from "../../api";
import styles from "./SearchField.module.css";
// import {PokemonView, pokemonIDValue} from '../PokemonView/PokemonView.js' 




const SearchField = ({
  placeholder = "Enter pokemon name",
  onSearchClicked = (search) => { },
}) => {

  const arr = [];
  const [text, setText] = useState("");

  const [pokemon, setPokemon] = useState(undefined);
  const [pokemonID, setPokemonID] = useState(undefined);
  const [suggestedArray, setSuggestedArray] = useState([]);

  const [fetchingUrl, setFetchingUrl] = useState('');

  useEffect(() => {
    fetchAPokemon(text)
      .then((pokemon) => {
        setPokemon(pokemon);
        // setStatus("resolved");
      })
      .catch((error) => {
        //process the error
        // setStatus("error");
        console.log("error");
      });
    setPokemonID(pokemonID);


    fetchAPokemon(fetchingUrl)
      .then((resultValue) => {
        let answer = resultValue.results;
        for (let i = 0; i < 10; i++) {
          let answervalue = answer[i].name;
          arr.push(answervalue);
          // setSuggestedArray(answervalue); //SEMI WORKING......
          setSuggestedArray([...arr, answervalue]); //SEMI WORKING......
          // setSuggestedArray(arr);//SEMI WORKING......
        }
      })
      .catch((error) => {
        // setStatus("error");
        console.log("error");
      });
    setFetchingUrl(fetchingUrl);
    console.log("ASHHH", suggestedArray);
  }, [text])



  console.log("B3NKIGUYERTGY7RYIT3YTEIOGQ.............",suggestedArray);
  return (
    <div className={styles.SearchField}>
      <input
        className={styles.SearchInput}
        type="search"
        value={text}
        placeholder={placeholder}
        onChange={(e) => {
          setText(e.target.value);
          if (e.target.value === "") {
            onSearchClicked("");
          }
        }}
      />
      <button
        disabled={text === ""}
        className={styles.SearchButton}
        onClick={() => {
          onSearchClicked(text);

          fetchAPokemon(text)
            .then((pokemon) => {
              setPokemon(pokemon);
              // setStatus("resolved");
            })
            .catch((error) => {
              //process the error
              // setStatus("error");
              console.log("error");
            });

          let id_value = lget(
            pokemon,
            "id"
          );

          setPokemonID(id_value);   //SEMI WORKING......
          const BASE_URL_STRING = "https://pokeapi.co/api/v2/";
          // const pokeMonSuggestionURL = `${BASE_URL_STRING}pokemon?limit=10&offset=${pokemonID}`;
          const pokeMonSuggestionURL = `?limit=10&offset=${pokemonID}`;
          console.log('HEYYY...', pokeMonSuggestionURL);
          console.log(pokemonID);
          setFetchingUrl(pokeMonSuggestionURL);
          console.log('WASSUP POKEMONS...', fetchingUrl);

          fetchAPokemon(pokeMonSuggestionURL)
            .then((resultValue) => {
              let answer = resultValue.results;
              
              for (let i = 0; i < 10; i++) {
                let answervalue = answer[i].name;
                arr.push(answervalue);
                // setSuggestedArray(answervalue); //SEMI WORKING......
                setSuggestedArray([...arr, answervalue]); //SEMI WORKING......
                // setSuggestedArray(arr);//SEMI WORKING......
              }
            })
            .catch((error) => {
              // setStatus("error");
              console.log("error");
            });

          console.log("ASHHH", suggestedArray);

        }
        }
      >
        Search
      </button>

      <div class={styles.dropdown}>
        <button class={styles.dropbtn}>
          Suggest
      {/* <i class="fa fa-caret-down"></i> */}
        </button>
        <div class={styles.dropdownContent}>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[0]);
              setText(suggestedArray[0]);
            }}
          >{suggestedArray[0]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[1]);
              setText(suggestedArray[1]);
            }}
          >{suggestedArray[1]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[2]);
              setText(suggestedArray[2]);
            }}
          >{suggestedArray[2]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[3]);
              setText(suggestedArray[3]);
            }}
          >{suggestedArray[3]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[4]);
              setText(suggestedArray[4]);
            }}
          >{suggestedArray[4]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[5]);
              setText(suggestedArray[5]);
            }}
          >{suggestedArray[5]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[6]);
              setText(suggestedArray[6]);
            }}
          >{suggestedArray[6]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[7]);
              setText(suggestedArray[7]);
            }}
          >{suggestedArray[7]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[8]);
              setText(suggestedArray[8]);
            }}
          >{suggestedArray[8]}</p>
          <p
            onClick={() => {
              onSearchClicked(suggestedArray[9]);
              setText(suggestedArray[9]);
            }}
          >{suggestedArray[9]}</p>
        </div>
      </div>


      {/* Absolutely working id snippet */}
      {/* <div>{pokemonID}</div> */}

      {/* {suggestedArray.map((index) => {
        <ol>
          <li>{suggestedArray[index]}</li>
        </ol>
      })} */}

      {/* <ol>
        <li>{suggestedArray[0]}</li>
        <li>{suggestedArray[1]}</li>
        <li>{suggestedArray[2]}</li>
        <li>{suggestedArray[3]}</li>
        <li>{suggestedArray[4]}</li>
        <li>{suggestedArray[5]}</li>
        <li>{suggestedArray[6]}</li>
        <li>{suggestedArray[7]}</li>
        <li>{suggestedArray[8]}</li>
        <li>{suggestedArray[9]}</li>
      </ol> */}
      {/* ABOVE ONE IS WORKING CODE... */}
    </div>

  );
};

SearchField.propTypes = {};

export default SearchField;
