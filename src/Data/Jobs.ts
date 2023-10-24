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
    name: 'Luffy gear 5',
    pathGif: 'https://i.pinimg.com/originals/68/ab/3f/68ab3f1b4c93a51801bb8d16bdc92837.gif',
    pathStaic: 'https://geekdama.com.br/wp-content/uploads/2022/12/one-piece-manga-1070-luffy-gear-5-colorizacao-by-JLjarx-postcover-1280x670.jpg',
    pathPage: 'https://onepieceex.net/',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    jobArea: jobsFilterEnum.frontEnd,
  },
  {
    name: 'Namy mais linda',
    pathGif: 'https://i.pinimg.com/originals/22/8c/3f/228c3fbece0e83c9a3604cb1398c85b2.gif',
    pathStaic: 'https://hitsite.com.br/wp-content/uploads/2023/01/one-piece-nami.jpg',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
    jobArea: jobsFilterEnum.frontEnd,
  },
  {
    name: 'Zoro sola',
    pathGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwaWk0amMwYnhxcDRheWVmM3J6Nndwdmpjc2kwbm4waWk0d2hkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif',
    pathStaic: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/04/legiao_NKrQjeyAoO5I.jpg',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
    jobArea: jobsFilterEnum.backEnd,
  },
  {
    name: 'Zoro sola',
    pathGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwaWk0amMwYnhxcDRheWVmM3J6Nndwdmpjc2kwbm4waWk0d2hkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif',
    pathStaic: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/04/legiao_NKrQjeyAoO5I.jpg',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
    jobArea: jobsFilterEnum.backEnd,
  },
  {
    name: 'Zoro sola',
    pathGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwaWk0amMwYnhxcDRheWVmM3J6Nndwdmpjc2kwbm4waWk0d2hkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif',
    pathStaic: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/04/legiao_NKrQjeyAoO5I.jpg',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
    jobArea: jobsFilterEnum.backEnd,
  },
  {
    name: 'Zoro sola',
    pathGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwaWk0amMwYnhxcDRheWVmM3J6Nndwdmpjc2kwbm4waWk0d2hkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif',
    pathStaic: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/04/legiao_NKrQjeyAoO5I.jpg',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
    jobArea: jobsFilterEnum.backEnd,
  },
  {
    name: 'Zoro sola',
    pathGif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwaWk0amMwYnhxcDRheWVmM3J6Nndwdmpjc2kwbm4waWk0d2hkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif',
    pathStaic: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/04/legiao_NKrQjeyAoO5I.jpg',
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
    jobArea: jobsFilterEnum.backEnd,
  },
];
