/* eslint-disable react/prop-types */
import React from 'react';

import styles from './SearchBar.module.scss';

export const SearchBar = ({ query, setQuery }) => (
  <div className={styles.search_bar}>
    <span className={styles.search_container}>
      <input
        type="text"
        placeholder="company name"
        value={query}
        className={styles.input}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />

      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setQuery('');
        }}
      >
        Clear
      </button>
    </span>
  </div>
);
