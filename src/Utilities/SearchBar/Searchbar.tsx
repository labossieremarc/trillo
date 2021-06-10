import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form action="#" className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Search Hotels"
      />
      <button className={styles.search__button}>
        <svg className={styles.search__icon}>
          <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
