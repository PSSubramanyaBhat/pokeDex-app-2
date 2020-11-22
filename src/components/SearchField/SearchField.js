import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { on } from "process";
import lget from "lodash/get";
import { fetchPokemonURL, fetchAPokemon } from "../../api";
import styles from "./SearchField.module.css";




const SearchField = ({
  placeholder = "Enter pokemon name",
  onSearchClicked = (search) => { },
  pokemonIDValue,
}) => {

  const arr = [];
  const [text, setText] = useState("");
  const [suggestedArray, setSuggestedArray] = useState([]);
  const [fetchingUrl, setFetchingUrl] = useState('');

  /*useEffect(() => {
    searchFunction();
  }, [pokemonIDValue])
  */   //PERFECTLY WORKING CODE...

  useEffect(() => {

    searchFunction();  //SEMI WORKING... BUT AWESOME...
    fetchAPokemon(fetchingUrl)
      .then((resultValue) => {
        let answer = resultValue.results;
        for (let i = 0; i < 10; i++) {
          let answervalue = answer[i].name;
          setSuggestedArray([...arr, answervalue]);
          setSuggestedArray([...arr]);
        }
      })
      .catch((error) => {
        console.log("error");
      });
    setFetchingUrl(fetchingUrl);
    console.log("ASHHH", suggestedArray);
  }, [text])

  function searchFunction() {
    onSearchClicked(text);
    const pokeMonSuggestionURL = `?limit=10&offset=${pokemonIDValue}`;
    setFetchingUrl(pokeMonSuggestionURL);

    fetchAPokemon(pokeMonSuggestionURL)
      .then((resultValue) => {
        let answer = resultValue.results;

        for (let i = 0; i < 10; i++) {
          let answervalue = answer[i].name;
          arr.push(answervalue);
          setSuggestedArray([...arr, answervalue]);
          setSuggestedArray([...arr]);
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }

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
          searchFunction()
        }
        }
      >
        Search
      </button>

      <div class={styles.dropdown}>
        <button class={styles.dropbtn}>
          Suggest
        </button>
        <div class={styles.dropdownContent}>

          {suggestedArray.map((suggestPokeData) => {
            return (
              <p
                onClick={() => {
                  onSearchClicked(suggestPokeData);
                  setText(suggestPokeData);
                  searchFunction();
                }}
              >{suggestPokeData}</p>
            );
          })}
        </div>
      </div>
    </div>

  );
};

SearchField.propTypes = {};

export default SearchField;


/*
POINTS LEFT TO ACCOMPLISH...
1.) Husky...
2.) ESLint...
3.) Make the search on click of suggested list itself and no need to reclick search for that...
4.) Add these functionalities in My pokeDex App...
5.) Use Prop Drilling as much as possible and also try ContextAPI...
*/