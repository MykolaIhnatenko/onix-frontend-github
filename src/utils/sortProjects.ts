import { IProject } from '../interfaces/IProjectsList';

const sortProjects = (projects: IProject[], ids: number[]) => {
  const copyProjects = [...projects];

  return copyProjects.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
};

export default sortProjects;
