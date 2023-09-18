import React from 'react';
import { HexagonTopPage } from '../Icons/HexagonTopPage';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Button } from '../Components/Button/Button';
import { GitHubSVG } from '../Icons/GitHubSVG';
import { InstagramSVG } from '../Icons/InstagramSVG';
import { LinkedinSVG } from '../Icons/LinkedinSVG';
import { HomeArtSVG } from '../Icons/HomeArtSVG';

function Menu() {
  return [
    <div className="flex justify-center items-center pt-16 mb-20 gap-60">

      <div className="flex gap-5">
        <HexagonTopPage />
        <Heading size="sm" className="text-blue-200">
          Dennis Marcelo
        </Heading>
      </div>

      <div className="flex gap-20  text-blue-200">
        <Text size="sm" className="shrink-0">Home</Text>
        <Text size="sm">About</Text>
        <Text size="sm">Portfolio</Text>
        <Text size="sm">Works</Text>
        <Text size="sm">Contact</Text>
      </div>

    </div>,
  ];
}

function Body() {
  return [
    <div className="flex justify-evenly">
      <div>
        <div className="mb-32">
          <Text size="sm" className="text-blue-200 leading-none mb-2">Olá pessoas,</Text>
          <Heading size="lg" className="text-yellow-200 leading-none mb-2">EU SOU UM</Heading>
          <Heading size="lg" className="text-yellow-200 leading-none mb-2">FULL-STACK DEVELOPER</Heading>
          <Text size="sm" className="text-blue-200 leading-none mb-2">Seja bem-vindo ao meu portfólio</Text>
        </div>
        <Button className="mb-40 py-5 px-8 bg-blue-400 text-blue-200 hover:bg-blue-300">Saiba mais sobre mim</Button>
        <div className=" flex space-x-7">
          <GitHubSVG />
          <LinkedinSVG />
          <InstagramSVG />
        </div>
      </div>

      <div>
        <HomeArtSVG />
      </div>

    </div>,
  ];
}

export function Home() {
  return (
    <div className="min-h-screen bg-blue-600">
      {Menu()}
      {Body()}
    </div>
  );
}
