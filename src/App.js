import "./App.css";
import React, { useEffect, useState } from "react";
import lget from "lodash/get";
import ErrorBoundary from "./ErrorBoundary";
import PokemonViewer from "./components/PokemonViewer/PokemonViewer";
import SearchField from "./components/SearchField/SearchField";
import { fetchAPokemon } from "./api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import Favourites from "./components/Favourites/Favourites";
import Facts from "./components/Facts/Facts";
import Home from "./components/Home/Home";

// const BASE_URL = "https://pokeapi.co/api/v2/";
// `${BASE_URL}pokemon?limit=10&offset=200`

function App() {
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

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">View</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/facts">Facts</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/facts">
            <Facts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
