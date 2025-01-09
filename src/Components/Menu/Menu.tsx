/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { } from 'react-router-dom';
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

function RedirectPage(page:string) {
  window.location.href = page;
}

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
          <Text><a href="/">Home</a></Text>
          <Text><a href="/about">About</a></Text>
          <Text><a href="/portfolio">Portfolio</a></Text>
          <Text><a href="/my-techs">Tools</a></Text>
          <Text><a href="/professional-experience">Works</a></Text>
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

          <button type="button" className="buttons-menu-mobile" onClick={() => RedirectPage('/')}>
            <House size={36} />
            <Text>Home</Text>
          </button>

          <button type="button" className="buttons-menu-mobile" onClick={() => RedirectPage('/about')}>
            <User size={36} />
            <Text>About</Text>
          </button>

          <button type="button" className="buttons-menu-mobile" onClick={() => RedirectPage('/portfolio')}>
            <FolderSimpleUser size={36} />
            <Text>Portfolio</Text>
          </button>

          <button type="button" className="buttons-menu-mobile" onClick={() => RedirectPage('/my-techs')}>
            <Wrench size={36} />
            <Text>Tools</Text>
          </button>

          <button type="button" className="buttons-menu-mobile" onClick={() => RedirectPage('/professional-experience')}>
            <Briefcase size={36} />
            <Text>Works</Text>
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
