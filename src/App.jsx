import React, { useState } from 'react';
import companies from './companiesBase.json';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Company } from './components/Company';

import styles from './App.module.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const filteredCompanies = companies.filter(
    conpany => conpany.companyName.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className={styles.body}>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      <div className={styles.flex}>
        {filteredCompanies.map(company => (
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
    </div>
  );
};
