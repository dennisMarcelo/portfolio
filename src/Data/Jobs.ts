/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum jobsFilterEnum {
  todos = 0,
  frontEnd = 1,
  backEnd = 2
}

export interface portfolioInterface {
  name: string;
  pathGif: string,
  pathStaic: string,
  pathGitHubRepository: string,
  pathPage:string
  jobArea: jobsFilterEnum,
}

export const portfolioJobs: Array<portfolioInterface> = [
  {
    name: 'Trivia Night',
    pathGif: 'https://i.ibb.co/wJRcz4f/triva2.gif',
    pathStaic: 'https://i.ibb.co/tbKWb2G/Captura-de-tela-2023-11-06-183008.jpg',
    pathPage: 'https://sd-010-b-project-trivia-react-redux.vercel.app/',
    pathGitHubRepository: 'https://github.com/dennisMarcelo/trivia-react-redux',
    jobArea: jobsFilterEnum.frontEnd,
  },
  {
    name: 'ToDo List',
    pathGif: 'https://i.ibb.co/1mzfwFY/todo-list.gif',
    pathStaic: 'https://i.ibb.co/FHLLNkw/Captura-de-tela-2023-11-06-192344.jpg',
    pathPage: 'https://dennismarcelo.github.io/Todo-List/',
    pathGitHubRepository: 'https://github.com/dennisMarcelo/Todo-List',
    jobArea: jobsFilterEnum.frontEnd,
  },
  {
    name: 'NetGames',
    pathGif: 'https://i.ibb.co/KbRMmcN/NetGames.gif',
    pathStaic: 'https://i.ibb.co/3ry36nL/Captura-de-tela-2023-11-06-191155.jpg',
    pathPage: 'https://dennismarcelo.github.io/movie-card-library-crud/#/',
    pathGitHubRepository: 'https://github.com/dennisMarcelo/movie-cards-library',
    jobArea: jobsFilterEnum.frontEnd,
  },
  {
    name: 'PokeDex',
    pathGif: 'https://i.ibb.co/x7zVMdg/pokedex.gif',
    pathStaic: 'https://i.ibb.co/YRdt7hM/Captura-de-tela-2023-11-06-191919.jpg',
    pathPage: 'https://dennismarcelo.github.io/trybe-exercises/',
    pathGitHubRepository: 'https://github.com/dennisMarcelo/exercise-pokedex-state',
    jobArea: jobsFilterEnum.frontEnd,
  },
];
