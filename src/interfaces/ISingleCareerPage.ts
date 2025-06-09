import IPages from './IPages';
import ICareer from './ICareer';

export default interface ISingleCareerPage extends IPages {
  career: ICareer;
}
