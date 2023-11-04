import React from 'react';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { HTMLSVG } from '../Icons/HTMLSVG';
import { NodeSVG } from '../Icons/NodeSVG';
import { CSSSVG } from '../Icons/CSSSVG';
import { JSSVG } from '../Icons/JSSVG';
import { ReactSVG } from '../Icons/ReactSVG';
import { PythonSVG } from '../Icons/PythonSVG';
import './MyTechs.css';

function Header() {
  return (
    <Heading className="heading-mtech leading-none">
      <span className="text-blue-200">Minhas</span>
      {' '}
      <span className="text-yellow-200">Ferramentas</span>
    </Heading>
  );
}

function OldTechs() {
  return (
    <div className="techs">
      <Text className="text-subtitle">Tecnologias</Text>
      <Heading className="heading-subtitle">
        <span className="text-yellow-200">Já</span>
        {' '}
        <span className="text-blue-200">Utilizadas</span>
      </Heading>
      <div className="techs-icons">
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
        <PythonSVG className="icon" />
      </div>
    </div>
  );
}

function CurrentTechs() {
  return (
    <div className="techs">
      <Text className="text-subtitle">Tecnologias</Text>
      <Heading size="sm" className="heading-subtitle">
        <span className="text-yellow-200">Utilizando</span>
        {' '}
        <span className="text-blue-200">Atualmente</span>
      </Heading>
      <div className="techs-icons">
        <NodeSVG className="icon" />
        <HTMLSVG className="icon" />
        <CSSSVG className="icon" />
        <JSSVG className="icon" />
        <ReactSVG className="icon" />
      </div>
    </div>
  );
}

export function MyTechs() {
  return (
    <div className="min-h-screen pb-[5%] bg-blue-600">
      <div className="div-top" id="tools" />
      {Header()}
      {OldTechs()}
      {CurrentTechs()}
    </div>
  );
}
