import { FILTERS_VARIANT } from '../constants/constants';
import { IPagination } from '../interfaces/IBlogsList';
import { IPaginationProjects, IProject } from '../interfaces/IProjectsList';
import { ITechnologie, ITechnologiesList } from '../interfaces/ITechnologies';

const sortTags = (tags: ITechnologie[], compareFn: (a: ITechnologie, b: ITechnologie) => number): ITechnologie[] => {
  const sortedTags = [...tags];
  sortedTags.sort(compareFn);
  return sortedTags;
};

const getFilterListHandle = (typeFilter: string, technologiesList: ITechnologiesList) => {
  const newFiltersList = [
    {
      id: 0,
      name: `All ${typeFilter}`,
    },
  ];
  const compareFn = (a: ITechnologie, b: ITechnologie) => a.attributes?.name.localeCompare(b?.attributes?.name);

  const indexItem = technologiesList?.data?.findIndex((item) => item?.attributes?.name === typeFilter);
  if (indexItem !== undefined && indexItem !== -1 && technologiesList?.data) {
    const arrayTags = technologiesList.data[indexItem].attributes?.tags?.data;
    const sortedTags = sortTags(arrayTags, compareFn);
    sortedTags.forEach(({ id, attributes }) => newFiltersList.push({ id, name: attributes?.name }));
  }
  return newFiltersList;
};

export default getFilterListHandle;

export const getNameFilter = (text: string) => (text.split(FILTERS_VARIANT.ALL).length > 1
  ? text.split(FILTERS_VARIANT.ALL)[1] : text);

export const saveProjectList = (
  data: IProject[],
  currentList: IProject[],
  setListProjects:(array: IProject[])=>void,
) => {
  if (data && data.length > 0) {
    const oldArray = [...currentList, ...data];
    setListProjects(oldArray);
  }
};

export const initialProjectList = (
  projects:IProject[],
  initialPagination: IPagination | undefined,
  setListProjects: (array: IProject[])=>void,
  setPaginationWorks:(obj:IPaginationProjects) => void,
) => {
  if (projects && projects.length > 0 && initialPagination?.limit && initialPagination?.total) {
    setListProjects(projects);
    setPaginationWorks({
      current: 1,
      maxPage: Math.ceil(initialPagination.total / initialPagination.limit),
    });
  }
};

export const formTextHandle = (text: string) => {
  const textForm = text?.split(' ');
  let newText;
  if (textForm?.length === 2) {
    newText = (
      <span>
        {textForm[0]}
        <br />
        {textForm[1]}
      </span>
    );
  } else if (textForm?.length > 2) {
    newText = (
      <span>
        {`${textForm[0]} ${textForm[1]}`}
        <br />
        {text.split(`${textForm[0]} ${textForm[1]}`)[1]}
      </span>
    );
  } else {
    newText = (
      <span>
        {text}
      </span>
    );
  }
  return newText;
};

export const getCategoriesStudies = (array:ITechnologiesList) => {
  let tags: string[] = [];
  if (array?.data) {
    array.data.forEach((item) => {
      tags = [...tags, ...item.attributes.tags.data.map((itemTag) => itemTag?.attributes?.name)];
    });
  } else {
    tags = [];
  }
  return tags;
};
