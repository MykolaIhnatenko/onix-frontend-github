interface TechnologyContent {
  backend?: string[];
  frontend?: string[];
  design?: string[];
  [key: string]: string[] | undefined;
}

interface ITechnology {
  name: string;
  content: TechnologyContent;
}

export default ITechnology;
