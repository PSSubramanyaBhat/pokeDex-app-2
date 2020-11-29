import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { on } from "process";
import lget from "lodash/get";
import { fetchPokemonURL, fetchAPokemon } from "../../api/api";
import styles from "./SearchField.module.css";
import ErrorBoundary from "../../ErrorBoundary";

const SearchField = ({
  placeholder = "Enter pokemon name",
  onSearchClicked = (search) => {},
  pokemonIDValue,
}) => {
  const arr = [];
  const [text, setText] = useState("");
  const [suggestedArray, setSuggestedArray] = useState([]);
  const [fetchingUrl, setFetchingUrl] = useState(""); //PERFECTLY WORKING CODE...
  const [searchTrigger, setSearchTrigger] = useState(0);

  useEffect(() => {
    searchFunction();
  }, [fetchingUrl]);

  /*useEffect(() => {
    searchFunction();
  }, [pokemonIDValue])
  */

  // useEffect(() => {
  //   searchFunction();
  //   // suggestionFunction();
  // }, [searchTrigger]);

  useEffect(() => {
    // searchFunction(); //SEMI WORKING... BUT AWESOME...
    suggestionFunction();
    // console.log("ASHHH", suggestedArray);
  }, [text]);

  function searchFunction() {
    onSearchClicked(text);
    const pokeMonSuggestionURL = `?limit=10&offset=${pokemonIDValue}`;
    setFetchingUrl(pokeMonSuggestionURL);
    // suggestionFunction();
  }

  function suggestionFunction() {
    fetchAPokemon(fetchingUrl)
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
    setFetchingUrl(fetchingUrl);
    console.log("ASHHH", suggestedArray);
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
          // setSearchTrigger((c) => c + 1);
          searchFunction();
        }}
      >
        Search
      </button>

      <ErrorBoundary>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Suggest</button>
          <div className={styles.dropdownContent}>
            {suggestedArray.map((suggestPokeData, idx) => {
              return (
                <p
                  key={idx}
                  onClick={() => {
                    // setSearchTrigger((c) => c + 1);
                    onSearchClicked(suggestPokeData);
                    setText(suggestPokeData);
                    searchFunction();
                  }}
                >
                  {suggestPokeData}
                </p>
              );
            })}
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

SearchField.propTypes = {};

export default SearchField;

/*
POINTS LEFT TO ACCOMPLISH...
4.) Make the search on click of suggested list itself and no need to reclick search for that...
5.) Add these functionalities in My pokeDex App...
6.) Use Prop Drilling as much as possible and also try ContextAPI...

POINT TO BE FIXED... : WE HAVE DONE SUGGESTIONS OF 10 POKEMONS ON SEARCH, BUT IT LAGS BY ONE STEP, SO FIX IT LATER...
*/
