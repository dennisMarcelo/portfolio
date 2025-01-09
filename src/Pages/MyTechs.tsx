import React from 'react';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { HTMLSVG } from '../Icons/HTMLSVG';
import { NodeSVG } from '../Icons/NodeSVG';
import { CSSSVG } from '../Icons/CSSSVG';
import { JSSVG } from '../Icons/JSSVG';
import { ReactSVG } from '../Icons/ReactSVG';
import { PythonSVG } from '../Icons/PythonSVG';
import { HandlebarsSVG } from '../Icons/HandlebarsSVG';
import { ReduxSvg } from '../Icons/ReduxSvg';
import { JestSvg } from '../Icons/JestSvg';
import { MongoDbSVG } from '../Icons/MongoDbSVG';
import './MyTechs.css';
import { MysqlSVG } from '../Icons/MysqlSVG';
import { LinuxSVG } from '../Icons/LinuxSVG';
import { StencilSVG } from '../Icons/StencilSVG';
import { IonicSVG } from '../Icons/IonicSVG';
import { TailwindSVG } from '../Icons/TailwindSVG';
import { CSharpSVG } from '../Icons/CSharpSVG';

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
        <HandlebarsSVG className="icon" />
        <ReduxSvg className="icon" />
        <JestSvg className="icon" />
        <MongoDbSVG className="icon" />
        <MysqlSVG className="icon" />
        <TailwindSVG className="icon" />
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
        <CSharpSVG className="icon" />
        <JSSVG className="icon" />
        <NodeSVG className="icon" />
        <HTMLSVG className="icon" />
        <CSSSVG className="icon" />
        <ReactSVG className="icon" />
        <LinuxSVG className="icon" />
        <StencilSVG className="icon" />
        <IonicSVG className="icon" />
      </div>
    </div>
  );
}

export function MyTechs() {
  return (
    <div className="pb-[5%]">
      {Header()}
      {OldTechs()}
      {CurrentTechs()}
    </div>
  );
}
