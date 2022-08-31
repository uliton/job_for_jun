/* eslint-disable react/prop-types */
import React from 'react';

import styles from './SearchBar.module.scss';

export const SearchBar = ({ query, setQuery }) => (
  <div className={styles.search_bar}>
    Filter by
    <input
      type="text"
      placeholder="company name"
      value={query}
      onChange={(event) => {
        setQuery(event.target.value);
      }}
      className={styles.input}
    />
    <button
      type="button"
      onClick={() => {
        setQuery('');
      }}
      className={styles.button}
    >
      Clear
    </button>
  </div>
);
