import "./App.css";
import React, { useEffect, useState } from "react";
import lget from "lodash/get";
import { fetchAPokemon } from "./api/api";
import cn from "classnames";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import Favourites from "./components/Favourites/Favourites";
import Facts from "./components/Facts/Facts";
import Home from "./components/Home/Home";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

// const BASE_URL = "https://pokeapi.co/api/v2/";
// `${BASE_URL}pokemon?limit=10&offset=200`

function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const [drawerState, setDrawerState] = useState(true);

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
        <div
          className={cn("DrawerStyle", {
            DrawerClosedStyle: drawerState === false,
          })}
        >
          <GiHamburgerMenu
            className="DrawerIcon"
            onClick={() => {
              setDrawerState(!drawerState);
            }}
          />
          {drawerState === true ? (
            <div>
              <img
                className="AppImage"
                src="https://cdn0.iconfinder.com/data/icons/movies-11/32/pokemon_movie_cinema_ball_pokeball-512.png"
                alt="Search for Pokemons"
              />
              <h2 className="AppName">PokeDex</h2>
              <ul>
                <li>
                  {/* <GrOverview
                    className="DrawerIconOption"
                  /> */}
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      // fontSize: '15px',
                      // fontWeight: '600',
                      // borderBottom: '2px solid red',
                      // fontFamily: 'Montserrat'
                    }}
                  >
                    View
                  </Link>
                </li>
                <li>
                  {/* <BsFillBookmarkFill
                    className="DrawerIconOption"
                  /> */}
                  <Link
                    to="/favourites"
                    style={{
                      textDecoration: "none",
                      // fontSize: '15px',
                      // fontWeight: '600',
                      // borderBottom: '2px solid red',
                      // fontFamily: 'Montserrat'
                    }}
                  >
                    Favourites
                  </Link>
                </li>
                {/* <li
            >
              <Link to="/facts"
              style={{
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                borderBottom: '2px solid red',
                // fontFamily: 'Montserrat'
              }}
            >
              Facts
            </Link>
            </li> */}
              </ul>
            </div>
          ) : (
            <div>
              <GrOverview className="DrawerIconOption1" />
              <BsFillBookmarkFill className="DrawerIconOption2" />
            </div>
          )}
        </div>

        <Switch>
          <Route path="/favourites">
            <Favourites />
          </Route>
          {/* <Route path="/facts">
            <Facts />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
