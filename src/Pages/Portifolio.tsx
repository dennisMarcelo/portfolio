import React from 'react';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Button } from '../Components/Button/Button';
import { CardWork } from '../Components/CardWork/CardWork';

function Header() {
  return (
    <div className="mb-20 pt-14 ml-56 flex text-left gap-20 justify-start items-end">
      <Heading className="leading-none">
        <span className="text-yellow-200">Meu</span>
        <br />
        <span className="text-blue-200">Portifólio</span>
      </Heading>
      <Text className="max-w-[398px] text-blue-200">Estes são alguns dos trabalhos e  projetos que já realizei</Text>
    </div>
  );
}

function filter() {
  // diminuir tamanho da fonte
  return (
    <div className="mb-16 ml-56 flex gap-6">
      <Button className="py-4 px-7 text-blue-200 bg-blue-400 hover:bg-blue-300">Todos</Button>
      <Button className="py-4 px-4 text-blue-400 bg-blue-200 hover:bg-blue-100">Front-end</Button>
      <Button className="py-4 px-4 text-blue-400 bg-blue-200 hover:bg-blue-100">Back-end</Button>
    </div>
  );
}

function Body() {
  return (
    <div className="mb-16 ml-56 flex gap-20 justify-center">

      <CardWork
        color="blue-4"
        image={{
          alt: 'Luffy gear 5',
          pathGif: 'https://i.pinimg.com/originals/68/ab/3f/68ab3f1b4c93a51801bb8d16bdc92837.gif',
          pathStaic: 'https://geekdama.com.br/wp-content/uploads/2022/12/one-piece-manga-1070-luffy-gear-5-colorizacao-by-JLjarx-postcover-1280x670.jpg',
        }}
        pathGitHubRepository="https://github.com/topics/onepiece"
        pathPage="https://onepieceex.net/"
        size="h-lg"
      />

      <CardWork
        color="blue-2"
        image={{
          alt: 'Luffy gear 5',
          pathGif: 'https://i.pinimg.com/originals/22/8c/3f/228c3fbece0e83c9a3604cb1398c85b2.gif',
          pathStaic: 'https://hitsite.com.br/wp-content/uploads/2023/01/one-piece-nami.jpg',
        }}
        pathGitHubRepository="https://github.com/topics/onepiece"
        pathPage="https://onepieceex.net/"
        size="h-md"
      />

      <CardWork
        color="blue-5"
        image={{
          alt: 'Luffy gear 5',
          pathGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwaWk0amMwYnhxcDRheWVmM3J6Nndwdmpjc2kwbm4waWk0d2hkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif',
          pathStaic: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/04/legiao_NKrQjeyAoO5I.jpg',
        }}
        pathGitHubRepository="https://github.com/topics/onepiece"
        pathPage="https://onepieceex.net/"
        size="h-lg"
      />
    </div>
  );
}

export function Portifolio() {
  return (
    <div className="min-h-screen bg-blue-600">
      {Header()}
      {filter()}
      {Body()}
    </div>
  );
}
