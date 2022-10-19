import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

export const Footer = () => (
  <footer className={style.footer}>
    Created by
    {' '}
    <Link to="/job_for_jun/op" className={style.link}>Uliton</Link>
    {' '}
    &copy;
  </footer>
);
