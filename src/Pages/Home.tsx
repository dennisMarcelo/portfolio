import React, { useState } from 'react';
import {
  Briefcase,
  // Envelope,
  FolderSimpleUser,
  House, List, User, X, Wrench,
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
          <Text><a href="#home">Home</a></Text>
          <Text><a href="#about">About</a></Text>
          <Text><a href="#portfolio">Portfolio</a></Text>
          <Text><a href="#tools">Tools</a></Text>
          <Text><a href="#works">Works</a></Text>
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
          <a href="#home">

            <button type="button" className="buttons-menu-mobile">
              <House size={36} />
              <Text>Home</Text>
            </button>
          </a>

          <a href="#about">
            <button type="button" className="buttons-menu-mobile">
              <User size={36} />
              <Text>About</Text>
            </button>
          </a>

          <a href="#portfolio">
            <button type="button" className="buttons-menu-mobile">
              <FolderSimpleUser size={36} />
              <Text>Portfolio</Text>
            </button>
          </a>

          <a href="#tools">
            <button type="button" className="buttons-menu-mobile">
              <Wrench size={36} />
              <Text>Tools</Text>
            </button>
          </a>

          <a href="#works">
            <button type="button" className="buttons-menu-mobile">
              <Briefcase size={36} />
              <Text>Works</Text>
            </button>
          </a>
          {/* <button type="button" className="buttons-menu-mobile">
            <Envelope size={36} />
            <Text>Contact</Text>
          </button> */}
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

        <a href="#about">
          <Button className="button-about-me-home">Saiba mais sobre mim</Button>
        </a>

        <div className=" flex space-x-7 center-icons-mobile">
          <a href="https://github.com/dennisMarcelo" target="_blank" rel="noreferrer">
            <GitHubSVG />
          </a>

          <a href="https://www.linkedin.com/in/dennis-marcelo/" target="_blank" rel="noreferrer">
            <LinkedinSVG />
          </a>

          <a href="https://www.instagram.com/dms.is410/" target="_blank" rel="noreferrer">
            <InstagramSVG />
          </a>
        </div>
      </div>

      <HomeArtSVG className="home-art-svg" />
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-blue-600">
      <div className="div-top" id="home" />
      {Menu()}
      {Body()}
    </div>
  );
}
