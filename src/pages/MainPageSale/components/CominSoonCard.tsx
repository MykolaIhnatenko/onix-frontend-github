import ProjectCard from 'components/ProjectCard/ProjectCard';
import listProjectsData from '../data/listProjectsData';

function CominSoonCard(isLoading: boolean) {
  return (!isLoading && listProjectsData.map(({
    id, description, image, header,
  }, index) => (
    <ProjectCard
      key={[id, index].join('_')}
      image={image}
      description={description}
      header={header}
    />
  )));
}

export default CominSoonCard;
