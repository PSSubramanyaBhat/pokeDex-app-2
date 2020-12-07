import React, { useEffect, useState } from "react";
import cn from "classnames";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favourites from "../Favourites/Favourites";
import Home from "../Home/Home";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";
import PropTypes from "prop-types";
import styles from "./Drawer.module.css";

const Drawer = (props) => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [drawerState, setDrawerState] = useState(true);
  return (
    <div className={styles.Drawer}>
      <Router>
        {/* <div>
          
        </div> */}
        <div
          className={cn(styles.DrawerStyle, {
            [styles.DrawerClosedStyle]: drawerState === false,
          })}
        >
          <GiHamburgerMenu
            className={styles.DrawerIcon}
            onClick={() => {
              setDrawerState(!drawerState);
            }}
          />
          {drawerState === true ? (
            <div>
              <img
                className={styles.AppImage}
                src="https://cdn0.iconfinder.com/data/icons/movies-11/32/pokemon_movie_cinema_ball_pokeball-512.png"
                alt="Search for Pokemons"
              />
              <h2 className={styles.AppName}>PokeDex</h2>
              <ul>
                <li
                  className={cn(styles.DrawerOptionNames, {
                    [styles.DrawerOptionNamesSelectes]: selectedPage === 0,
                  })}
                  onClick={() => {
                    setSelectedPage(0);
                  }}
                >
                  {/* <GrOverview
                    className="DrawerIconOption"
                  /> */}
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      // color:'black',
                      // fontSize: '15px',
                      // fontWeight: '600',
                      // borderBottom: '2px solid red',
                      // fontFamily: 'Montserrat'
                    }}
                  >
                    View
                  </Link>
                </li>
                <li
                  className={cn(styles.DrawerOptionNames, {
                    [styles.DrawerOptionNamesSelectes]: selectedPage === 1,
                  })}
                  onClick={() => {
                    setSelectedPage(1);
                  }}
                >
                  {/* <BsFillBookmarkFill
                    className="DrawerIconOption"
                  /> */}
                  <Link
                    to="/favourites"
                    style={{
                      textDecoration: "none",
                      // color:'black'
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
              <GrOverview className={styles.DrawerIconOption1} />
              <BsFillBookmarkFill className={styles.DrawerIconOption2} />
            </div>
          )}
        </div>

        <Switch>
          <Route path="/favourites">
            <Favourites />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

Drawer.propTypes = {};

export default Drawer;
