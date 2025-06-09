import { IBlogAuthorData } from 'interfaces/IBlogAuthor';

interface IBannerAuthors {
  executor: IBlogAuthorData
  writers?: IBlogAuthorData[];
}

export default IBannerAuthors;
