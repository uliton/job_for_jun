/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../repositories.json';
import { login, password } from '../../api';

import style from './OtherProjects.module.scss';

export const OtherProjects = () => {
  const categories = ['all'];

  for (const project of projects) {
    if (!categories.includes(project.chapter)) {
      categories.push(project.chapter);
    }
  }

  const [renderProjects, setRenderProjects] = useState([]);

  const handleChooseCategory = (category) => {
    if (category === 'all') {
      return setRenderProjects([...projects]);
    }

    return setRenderProjects(
      [...projects].filter(project => project.chapter === category),
    );
  };

  const [loginStatus, setLoginStatus] = useState(true);
  const [loginQuery, setLoginQuery] = useState('');
  const [passwordQuery, setPasswordQuery] = useState('');
  const [error, setError] = useState('');

  const handlerLogin = () => {
    if (login === loginQuery.toLowerCase() && password === passwordQuery) {
      setLoginStatus(true);
    }

    setError('login ore password is wrong');
    setLoginQuery('');
    setPasswordQuery('');
  };

  return (
    <>
      {loginStatus
        ? (
          <div className={style.body}>
            <p>
              OtherProjects
            </p>

            <div>
              <span>
                Category -
              </span>
              {' '}
              <select
                onChange={(event) => {
                  handleChooseCategory(event.target.value);
                }}
              >
                <option
                  value={0}
                  disabled
                  selected
                >
                  choose a categor
                </option>

                {categories.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* <a
                href="https://drive.google.com/file/d/1nhXyA3fb5lFC2n9Lp2V-JJ6HqtvXMs1Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                My CV
              </a> */}
            </div>

            {renderProjects.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th className={style.formHead}>Name</th>
                    <th className={style.formHead}>DEMO</th>
                    <th className={style.formHead}>Repository</th>
                  </tr>
                </thead>
                <tbody>
                  {renderProjects.map(project => (
                    <tr key={project.id}>
                      <td className={style.formItem}>{project.name}</td>
                      <td>
                        <a
                          className={style.formLink}
                          href={project.demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </td>
                      <td>
                        <a
                          className={style.formLink}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )
        : (
          <div className={style.loginForm}>
            <input
              type="text"
              placeholder="login"
              value={loginQuery}
              className={style.input}
              onChange={(e) => {
                setLoginQuery(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="password"
              value={passwordQuery}
              className={style.input}
              onChange={(e) => {
                setPasswordQuery(e.target.value);
              }}
            />

            <button
              type="button"
              className={style.button}
              onClick={handlerLogin}
              onKeyDown={handlerLogin}
            >
              GO
            </button>

            {error && (
              <p className={style.error}>
                {error}
              </p>
            )}

            <Link to="/" className={style.link}>Main</Link>
          </div>
        )
      }
    </>
  );
};
