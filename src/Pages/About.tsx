import React from 'react';
import hexagonoPefil from '../Icons/HexagonoPerfil.png';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Skill } from '../Components/Skill/Skill';

function Header() {
  return (
    <div className="text-center max-w-5xl m-auto">
      <img src={hexagonoPefil} alt="perfil dennis" className="m-auto pt-7" />
      <Heading className="pt-4">
        <span className="text-blue-200">Dennis</span>
        {' '}
        <span className="text-yellow-200">Marcelo</span>
      </Heading>
      <Text className="text-blue-100 pt-3">
        Meu nome é Dennis Marcelo dos Santos sou de
        São Gonçalo/RJ. Sou formado em análise e desenvolvimento
        de sistemas, um ex-tryber e atualmente sou desenvolvedor
        full-stack na Zheos Tecnologia/Motiva.
      </Text>
    </div>
  );
}

function Body() {
  return (
    <div className="max-w-5xl m-auto pt-14">
      <Heading className="text-center">
        <span className="text-yellow-200">Hard</span>
        {' '}
        <span className="text-blue-200">Skills</span>
      </Heading>
      <div className="flex flex-wrap gap-12">
        <Skill proficiency={5} skillName="JavaScript" />
        <Skill proficiency={5} skillName="HTML" />
        <Skill proficiency={4} skillName="CSS" />
        <Skill proficiency={3} skillName="Python" />
        <Skill proficiency={3} skillName="C#" />
        <Skill proficiency={3} skillName="React" />
        <Skill proficiency={3} skillName="StencilJS" />
        <Skill proficiency={4} skillName="SQL" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="h-screen bg-blue-600">
      {Header()}
      {Body()}
    </div>
  );
}
