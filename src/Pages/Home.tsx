import React, { useState } from 'react';
import {
  Briefcase,
  Envelope,
  FolderSimpleUser,
  House, List, User, X,
} from 'phosphor-react';
import { clsx } from 'clsx';
import { HexagonTopPage } from '../Icons/HexagonTopPage';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Button } from '../Components/Button/Button';
import { GitHubSVG } from '../Icons/GitHubSVG';
import { InstagramSVG } from '../Icons/InstagramSVG';
import { LinkedinSVG } from '../Icons/LinkedinSVG';
import { HomeArtSVG } from '../Icons/HomeArtSVG';
import './Home.css';

function Menu() {
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
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Portfolio</Text>
          <Text>Works</Text>
          <Text>Contact</Text>
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
          <button type="button" className="buttons-menu-mobile">
            <House size={36} />
            <Text>Home</Text>
          </button>
          <button type="button" className="buttons-menu-mobile">
            <User size={36} />
            <Text>About</Text>
          </button>
          <button type="button" className="buttons-menu-mobile">
            <FolderSimpleUser size={36} />
            <Text>Portfolio</Text>
          </button>
          <button type="button" className="buttons-menu-mobile">
            <Briefcase size={36} />
            <Text>Works</Text>
          </button>
          <button type="button" className="buttons-menu-mobile">
            <Envelope size={36} />
            <Text>Contact</Text>
          </button>
        </nav>
      </div>
    </>
  );
}

function Body() {
  return (
    <div className="flex justify-evenly ">
      <div className="center-itens-mobile">
        <div className="salutation-texts">
          <Text className="text-home">Olá pessoas,</Text>
          <Heading className="heading-home">EU SOU UM</Heading>
          <Heading className="heading-home">FULL-STACK DEVELOPER</Heading>
          <Text className="text-home">Seja bem-vindo ao meu portfólio</Text>
        </div>

        <Button className="button-about-me-home">Saiba mais sobre mim</Button>

        <div className=" flex space-x-7 center-icons-mobile">
          <GitHubSVG />
          <LinkedinSVG />
          <InstagramSVG />
        </div>
      </div>

      <HomeArtSVG className="home-art-svg" />
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-blue-600">
      {Menu()}
      {Body()}
    </div>
  );
}
