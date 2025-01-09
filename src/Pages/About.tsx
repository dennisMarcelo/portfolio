import React from 'react';
import hexagonoPefil from '../Icons/HexagonoPerfil.png';
import { Heading } from '../Components/Heading/Heading';
import { Text } from '../Components/Text/Text';
import { Skill } from '../Components/Skill/Skill';
import './About.css';
import { geradorCaracteresAleatorio } from '../helpers/Utils';

interface SkillInterface {
  proficiency: 1 | 2 | 3 | 4 | 5;
  skillName: string,
}

const skills: Array<SkillInterface> = [
  { proficiency: 5, skillName: 'JavaScript' },
  { proficiency: 5, skillName: 'HTML' },
  { proficiency: 4, skillName: 'CSS' },
  { proficiency: 3, skillName: 'Python' },
  { proficiency: 3, skillName: 'C#' },
  { proficiency: 3, skillName: 'React' },
  { proficiency: 3, skillName: 'StencilJS' },
  { proficiency: 4, skillName: 'SQL' },
  { proficiency: 3, skillName: 'Linux' },
  { proficiency: 1, skillName: 'PHP' },
  { proficiency: 2, skillName: 'Jest' },
  { proficiency: 3, skillName: 'MongoDB' },
  { proficiency: 1, skillName: 'Handlebars' },
  { proficiency: 2, skillName: 'Tailwind' },
];

function Header() {
  return (
    <div className="text-center max-w-5xl m-auto pr-6 pl-6">
      <img src={hexagonoPefil} alt="perfil dennis" className="m-auto pt-7" />
      <Heading className="heading-about ">
        <span className="text-blue-200">Dennis</span>
        {' '}
        <span className="text-yellow-200">Marcelo</span>
      </Heading>
      <Text className="text-about">
        Olá, eu sou o Dennis! Sou formado em análise e desenvolvimento
        de sistemas, um ex-tryber e atualmente sou desenvolvedor
        full-stack na Zheos Tecnologia/Motiva.
      </Text>
    </div>
  );
}

function getSkillsPair(s:SkillInterface, index: number) {
  if (index % 2 === 0) {
    return (
      <Skill
        key={geradorCaracteresAleatorio(5)}
        proficiency={s.proficiency}
        skillName={s.skillName}
      />
    );
  }

  return '';
}

function getSkillsOdd(s:SkillInterface, index: number) {
  if (index % 2 !== 0) {
    return (
      <Skill
        key={geradorCaracteresAleatorio(5)}
        proficiency={s.proficiency}
        skillName={s.skillName}
      />
    );
  }

  return '';
}

function Body() {
  // const [scrollToLef, setScrollToLef] = useState(true);
  // const [contStrcon, setContStrcon] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const skillMetric = document.getElementById('skills-metric') || { scrollLeft: 0 };

  //     const unit = 1;

  //     if (scrollToLef) {
  //       skillMetric.scrollLeft += unit;
  //       setContStrcon(skillMetric.scrollLeft += unit);
  //     } else {
  //       skillMetric.scrollLeft -= unit;
  //       setContStrcon(skillMetric.scrollLeft -= unit);
  //     }

  //     if (contStrcon === skillMetric.scrollLeft) {
  //       setScrollToLef(!scrollToLef);
  //     }
  //   }, 20);

  //   return () => clearInterval(interval);
  // });

  return (
    <div className="max-w-5xl m-auto mt-8 pr-4 pl-4">
      <Heading className="heading-about">
        <span className="text-yellow-200">Hard</span>
        {' '}
        <span className="text-blue-200">Skills</span>
      </Heading>
      <div className="skills" id="skills-metric">
        <div className="flex gap-12 w-full">
          {skills.map((s, index) => getSkillsPair(s, index))}
        </div>

        <div className="flex gap-12 w-full">
          {skills.map((s, index) => getSkillsOdd(s, index))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="pb-[3%]">
      <div className="div-top" id="about" />
      {Header()}
      {Body()}
    </div>
  );
}
