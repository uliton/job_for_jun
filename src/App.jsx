import React from 'react';
import { Header } from './components/Header';
import companies from './companiesBase.json';
import { Company } from './components/Company';

import styles from './App.module.scss';

export const App = () => (
  <div className={styles.body}>
    <Header />
    <div className={styles.flex}>
      {companies.map(company => (
        <Company
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
