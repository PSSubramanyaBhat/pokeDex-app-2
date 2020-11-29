import "./App.css";
import React, { useEffect, useState } from "react";
import lget from "lodash/get";
import { fetchAPokemon } from "./api/api";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import Favourites from "./components/Favourites/Favourites";
import Facts from "./components/Facts/Facts";
import Home from "./components/Home/Home";

// const BASE_URL = "https://pokeapi.co/api/v2/";
// `${BASE_URL}pokemon?limit=10&offset=200`

function App() {
  console.log("We are running in this env - ", process.env.NODE_ENV);
  console.log(
    "If We are in dev mode show this -: ",
    process.env.REACT_APP_NOT_SECRET_CODE,
    process.env.REACT_APP_NOT_SECRET_CODE1
  );
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
