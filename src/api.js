/* eslint-disable no-console */
/* eslint-disable max-len */
const URL = 'https://docs.google.com/spreadsheets/d/1Sbn2dx_iR37rB2jMV9Ku34TUWhEpkCWWcmpn9RUEhvI/edit?usp=sharing';

// eslint-disable-next-line no-unused-vars
const getLogin = async() => {
  const response = await fetch(`${URL}/`);

  console.log(response);
};

// getLogin();

export const login = 'x3m';
export const password = '4444';
