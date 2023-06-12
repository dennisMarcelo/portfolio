import React from 'react';
import { Text } from '../Components/Text/Text';
import { Heading } from '../Components/Heading/Heading';
import { Card } from '../Components/Card/Card';
import { QuatationMarksSVG } from '../Icons/QuatationMarksSVG';

interface WorkHistoryProp {
  title: string,
  text: string,
}

const workHistory: WorkHistoryProp[] = [
  {
    title: 'Tempus',
    text: 'Trabalhei na Tempus em 2022 por 3 meses como desenvolvedor full-stack, foi onde iniciei minha aventura no mundo dotnet, desde então venho utilizado em projetos pessoais e profissionais.',
  },
  {
    title: 'Motiva',
    text: 'Trabalho na Motiva desde 2022, nela tive a oportunidade de trabalhar com back-end, front-end, planejar e criar estruturas de banco de dados, automação de aplicações, entre outras tarefas.',
  },
];

function Header() {
  return (
    <div className="mb-28 pt-14 mr-56 flex text-right gap-20 justify-end items-end">
      <Text className="max-w-[398px] text-blue-200">Minha jornada esta apenas começando</Text>
      <Heading className="leading-none">
        <span className="text-blue-200">Experiência</span>
        <br />
        <span className="text-yellow-200">Profissional</span>
      </Heading>
    </div>
  );
}

function Body() {
  return (
    <div className="flex gap-16 mb-14 justify-center">
      {workHistory.map((wh) => (
        <Card color="blue-500">
          <Heading
            className="text-yellow-200 pb-6"
            size="sm"
          >
            {wh.title}
          </Heading>
          <Text className="text-blue-200">{wh.text}</Text>
        </Card>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="m-auto flex flex-col items-center max-w-4xl">
      <QuatationMarksSVG className="" />
      <Text className="p-5 text-blue-200">
        &ldquo;
        <span className="text-yellow-200">Demore o tempo que for</span>
        {' '}
        para decidir o que você quer da vida, e depois que decidir
        {' '}
        <span className="text-yellow-200">não recue ante nenhum pretexto</span>
        , porque o mundo tentará te dissuadir.
        &rdquo;
      </Text>
      <Heading
        size="sm"
        className="leading-none text-yellow-200"
      >
        ~Friedrich Nietzsche
      </Heading>
    </div>
  );
}

export function ProfessionalExperience() {
  return (
    <div className="h-screen bg-blue-600">
      {Header()}
      {Body()}
      {Footer()}
    </div>
  );
}
