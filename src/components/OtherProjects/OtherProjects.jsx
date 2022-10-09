/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import React, { useState } from 'react';
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

  const [loginStatus, setLoginStatus] = useState(false);
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

              <a
                href="https://drive.google.com/file/d/1nhXyA3fb5lFC2n9Lp2V-JJ6HqtvXMs1Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                My CV
              </a>
            </div>

            {renderProjects.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>DEMO</th>
                    <th>Repository</th>
                  </tr>
                </thead>
                <tbody>
                  {renderProjects.map(project => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </td>
                      <td>
                        <a
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
          <div>
            <input
              type="text"
              placeholder="login"
              value={loginQuery}
              onChange={(e) => {
                setLoginQuery(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              value={passwordQuery}
              onChange={(e) => {
                setPasswordQuery(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={handlerLogin}
            >
              GO
            </button>
            <p>
              {error}
            </p>
          </div>
        )
      }
    </>
  );
};
