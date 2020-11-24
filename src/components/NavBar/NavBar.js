import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import cn from "classnames";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = (props) => {
  const [selected, setSelected] = useState(0);
  return (
    <Router>
      <div className={styles.NavBar}>
        {/* <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  setSelected(0);
                }}
                className={cn(styles.NavButton, { [styles.NavButtonSelected]: selected === 0 })}
                href="#home">
                View
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSelected(1);
                }}
                className={cn(styles.NavButton, { [styles.NavButtonSelected]: selected === 1 })}
                href="#home">
                Favourites
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSelected(2);
                }}
                className={cn(styles.NavButton, { [styles.NavButtonSelected]: selected === 2 })}
                href="#home">
                Facts
              </button>
            </li>
          </ul>
        </nav> */}

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

        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
};

NavBar.propTypes = {};

export default NavBar;
