import React from 'react';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { HTMLSVG } from '../Icons/HTMLSVG';
import { NodeSVG } from '../Icons/NodeSVG';
import { CSSSVG } from '../Icons/CSSSVG';
import { JSSVG } from '../Icons/JSSVG';
import { ReactSVG } from '../Icons/ReactSVG';
import { PythonSVG } from '../Icons/PythonSVG';

function Header() {
  return (
    <Heading className="pt-9 mb-28 text-center ">
      <span className="text-blue-200">Minhas</span>
      {' '}
      <span className="text-yellow-200">Techs</span>
    </Heading>
  );
}

function OldTechs() {
  return (
    <div className="max-w-5xl m-auto leading-none text-center mb-28">
      <Text>Tecnologias</Text>
      <Heading size="sm" className="pt-4 mb-8">
        <span className="text-yellow-200">Já</span>
        {' '}
        <span className="text-blue-200">Utilizadas</span>
      </Heading>
      <div className="flex gap-11 flex-wrap justify-center">
        <PythonSVG />

      </div>
    </div>
  );
}

function CurrentTechs() {
  return (
    <div className="max-w-5xl m-auto leading-none text-center">
      <Text>Tecnologias</Text>
      <Heading size="sm" className="pt-4 mb-8">
        <span className="text-yellow-200">Atualmente</span>
        {' '}
        <span className="text-blue-200">Desenvolvendo</span>
      </Heading>
      <div className="flex gap-11 flex-wrap justify-center">
        <NodeSVG />
        <HTMLSVG />
        <CSSSVG />
        <JSSVG />
        <ReactSVG />
      </div>
    </div>
  );
}

export function MyTechs() {
  return (
    <div className="min-h-screen bg-blue-600">
      {Header()}
      {OldTechs()}
      {CurrentTechs()}
    </div>
  );
}
