/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import './Menu.css';

import { clsx } from 'clsx';
import {
  Briefcase,
  // Envelope,
  FolderSimpleUser,
  House, List, User, X, Wrench,
} from 'phosphor-react';
import { HexagonTopPage } from '../../Icons/HexagonTopPage';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export function Menu() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <div
        id="menu"
        className="home-menu"
      >

        <div className="hexagono-name">
          <HexagonTopPage className="hexagono-top-page" />
          <Heading className="heading-top-page">
            Dennis Marcelo
          </Heading>
        </div>

        <button
          onClick={() => setMenuIsVisible(true)}
          type="button"
          className="button-menu bg-blue-400"
        >
          <List size={32} />
        </button>

        <div className="options-menu">
          <Text><Link to="/Portfolio/">Home</Link></Text>
          <Text><Link to="/Portfolio/about">About</Link></Text>
          <Text><Link to="/Portfolio/portfolio">Portfolio</Link></Text>
          <Text><Link to="/Portfolio/my-techs">Tools</Link></Text>
          <Text><Link to="/Portfolio/professional-experience">Works</Link></Text>
          {/* <Text>Contact</Text> */}
        </div>
      </div>

      <div
        id="menu-mobile"
        className={clsx(
          'options-menu-mobile',
          {
            'menu-mobile-close': menuIsVisible === false,
            'menu-mobile-open': menuIsVisible === true,
          },
        )}
      >
        <button
          onClick={() => setMenuIsVisible(false)}
          type="button"
          className="button-menu-mobile bg-blue-500 "
        >
          <X size={32} />
        </button>
        <nav className="nav-menu-mobile">

          <button
            type="button"
            className="buttons-menu-mobile"
            onClick={() => setMenuIsVisible(false)}
          >
            <House size={36} />
            <Text><Link to="/Portfolio/">Home </Link></Text>
          </button>

          <button
            type="button"
            className="buttons-menu-mobile"
            onClick={() => setMenuIsVisible(false)}
          >
            <User size={36} />
            <Text><Link to="/Portfolio/about">About</Link></Text>
          </button>

          <button
            type="button"
            className="buttons-menu-mobile"
            onClick={() => setMenuIsVisible(false)}
          >
            <FolderSimpleUser size={36} />
            <Text><Link to="/Portfolio/portfolio">Portfolio</Link></Text>
          </button>

          <button
            type="button"
            className="buttons-menu-mobile"
            onClick={() => setMenuIsVisible(false)}
          >
            <Wrench size={36} />
            <Text><Link to="/Portfolio/my-techs">Tools</Link></Text>
          </button>

          <button
            type="button"
            className="buttons-menu-mobile"
            onClick={() => setMenuIsVisible(false)}
          >
            <Briefcase size={36} />
            <Text><Link to="/Portfolio/professional-experience">Works</Link></Text>
          </button>

          {/* <button type="button" className="buttons-menu-mobile">
            <Envelope size={36} />
            <Text>Contact</Text>
          </button> */}
        </nav>
      </div>
    </>
  );
}
