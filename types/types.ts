export interface Assets {
    url: string;
  }
  
  export interface ProjectProps {
    id: string;
    title: string;
    poster: Assets;
    codeLink: string;
    liveLink: string;
    categoryog: string[];
    mainImage: Assets;
    demomp4: Assets;
    demowebm: Assets;
  }
  
  export interface ProjectsProps {
    projects: ProjectProps[];
  }