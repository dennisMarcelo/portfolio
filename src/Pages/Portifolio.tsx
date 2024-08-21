import React, { useState } from 'react';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Button } from '../Components/Button/Button';
import { CardWork } from '../Components/CardWork/CardWork';
import { jobsFilterEnum, portfolioInterface, portfolioJobs } from '../Data/Jobs';
import { geradorCaracteresAleatorio } from '../helpers/Utils';
import './Portifolio.css';

function Header() {
  return (
    <div className="header-portfolio">
      <Heading className="heading-porfolio">
        <span className="text-yellow-200">Meu</span>
        <br />
        <span className="text-blue-200">Portifólio</span>
      </Heading>
      <Text className="text-portfolio">Estes são alguns dos trabalhos e projetos que já realizei</Text>
    </div>
  );
}

function filter(setJobsFilter: Function) {
  return (
    <div className="filter-portfolio">
      <Button
        onClick={() => setJobsFilter(jobsFilterEnum.todos)}
        className="btn-filter-portfolio text-blue-200 bg-blue-400 hover:bg-blue-300"
      >
        Todos
      </Button>

      <Button
        onClick={() => setJobsFilter(jobsFilterEnum.frontEnd)}
        className="btn-filter-portfolio text-blue-400 bg-blue-200 hover:bg-white"
      >
        Front-end
      </Button>

      <Button
        onClick={() => setJobsFilter(jobsFilterEnum.backEnd)}
        className="btn-filter-portfolio text-blue-400 bg-blue-200 hover:bg-white"
      >
        Back-end
      </Button>
    </div>
  );
}

function renderCardWork(job: portfolioInterface) {
  return (
    <CardWork
      key={geradorCaracteresAleatorio(5)}
      className="card-work"
      color="blue-5"
      image={{
        alt: job.name,
        pathGif: job.pathGif,
        pathStaic: job.pathStaic,
      }}
      pathGitHubRepository={job.pathGitHubRepository}
      pathPage={job.pathPage}
    />
  );
}

function Body(jobsFilter: jobsFilterEnum) {
  return (
    <div className="div-card-work">
      {
        portfolioJobs
          .filter((job) => job.jobArea === jobsFilter || jobsFilter === jobsFilterEnum.todos)
          .map(renderCardWork)
      }
    </div>
  );
}

export function Portifolio() {
  const [jobsFilter, setJobsFilter] = useState(jobsFilterEnum.todos);

  return (
    <div className="min-h-screen">
      <div className="div-top" id="portfolio" />
      {Header()}
      {filter(setJobsFilter)}
      {Body(jobsFilter)}
    </div>
  );
}
