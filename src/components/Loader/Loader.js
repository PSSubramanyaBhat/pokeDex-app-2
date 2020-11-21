import PropTypes from "prop-types";
import React from "react";
import styles from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={styles.Loader}>
      <div className={styles.Spinner}></div>
      <p>Fetching...</p>
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
