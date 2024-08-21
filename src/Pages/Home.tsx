/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Button } from '../Components/Button/Button';
import { GitHubSVG } from '../Icons/GitHubSVG';
import { InstagramSVG } from '../Icons/InstagramSVG';
import { LinkedinSVG } from '../Icons/LinkedinSVG';
import { HomeArtSVG } from '../Icons/HomeArtSVG';
import './Home.css';

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
    <div className="min-h-screen">
      <div className="div-top" id="home" />
      {Body()}
    </div>
  );
}
