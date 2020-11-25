import React from "react";
import PropTypes from "prop-types";
import styles from "./Facts.module.css";

const Facts = (props) => {
  return (
    <div className={styles.Facts}>
      <h1>Welcome to PokeWorld!</h1>
      <p>
        This is a complete list of all 894 species of Pokémon currently known to
        exist. Each Pokémons entry on this list includes its number in the
        National Pokédex, its sprite, its name in both English and Japanese, the
        official romanization of its Japanese name, its types (most Pokémon with
        alternate forms that have typings differing from each other have all of
        those typings listed) and its number for every regional Pokédex it is
        known to be in.
      </p>
    </div>
  );
};

Facts.propTypes = {};

export default Facts;
