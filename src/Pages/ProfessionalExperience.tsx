import React from 'react';
import { Text } from '../Components/Text/Text';
import { Heading } from '../Components/Heading/Heading';
import { Card } from '../Components/Card/Card';
import { QuatationMarksSVG } from '../Icons/QuatationMarksSVG';
import './ProfessionalExperience.css';

interface WorkHistoryProp {
  title: string,
  text: string,
}

const workHistory: WorkHistoryProp[] = [
  {
    title: 'Motiva',
    text: 'Trabalho na Motiva desde 2022, nela tive a oportunidade de trabalhar com back-end, front-end, planejar e criar estruturas de banco de dados, automação de aplicações, entre outras tarefas.',
  },
  {
    title: 'Tempus',
    text: 'Trabalhei na Tempus em 2022 por 3 meses como desenvolvedor full-stack, foi onde iniciei minha aventura no mundo dotnet, desde então venho utilizado em projetos pessoais e profissionais.',
  },
];

function Header() {
  return (
    <div className="header-div">
      <Text className="text-header-xp">Minha jornada esta apenas começando</Text>
      <Heading className="heading-xp">
        <span className="text-blue-200">Experiência</span>
        <br />
        <span className="text-yellow-200">Profissional</span>
      </Heading>
    </div>
  );
}

function Body() {
  return (
    <div className="body-cards-xp">
      {workHistory.map((wh) => (
        <Card color="blue-500" className="card-xp">
          <Heading
            className="heading-card-xp"
          >
            {wh.title}
          </Heading>
          <Text className="text-card-xp">{wh.text}</Text>
        </Card>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="div-footer-xp">
      <QuatationMarksSVG className="quatation-svg" />
      <Text className="p-5 text-blue-200 text-footer-xp">
        &ldquo;
        <span className="text-yellow-200">Demore o tempo que for</span>
        {' '}
        para decidir o que você quer da vida, e depois que decidir
        {' '}
        <span className="text-yellow-200">não recue ante nenhum pretexto</span>
        ,
        porque o mundo tentará te dissuadir.
        &rdquo;
      </Text>
      <Heading
        className="heading-footer-xp"
      >
        ~Friedrich Nietzsche
      </Heading>
    </div>
  );
}

export function ProfessionalExperience() {
  return (
    <div className="min-h-screen bg-blue-600 pt-[2%] pb-[5%]">
      {Header()}
      {Body()}
      {Footer()}
    </div>
  );
}
