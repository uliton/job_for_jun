/* eslint-disable no-console */
import React, { useState } from 'react';
import companies from './companiesBase.json';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Company } from './components/Company';

import styles from './App.module.scss';

export const App = () => {
  const [query, setQuery] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const filteredCompanies = companies.filter(
    conpany => conpany.companyName.toLowerCase().includes(query.toLowerCase()),
  );

  const renderingCompany = filteredCompanies.slice(start, end);

  return (
    <div className={styles.body}>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      <div className={styles.flex}>
        {renderingCompany.map(company => (
          <Company
            key={company.id}
            id={company.id}
            name={company.companyName}
            logo={company.logo}
            link={company.website}
            linkedin={company.linkedin}
            dou={company.dou}
          />
        ))}
      </div>

      <div className={styles.buttons}>
        {start > 0 && (
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              setStart(start - 6);
              setEnd(end - 6);
            }}
          >
            Previous
          </button>
        )}

        {filteredCompanies.length - end > 0 && (
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              setStart(start + 6);
              setEnd(end + 6);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
