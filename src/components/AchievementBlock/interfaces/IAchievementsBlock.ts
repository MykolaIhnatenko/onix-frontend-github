import IPicture from '../../../interfaces/IPicture';

export default interface IAchievementsBlock {
  title?: string,
  classes?: {
    container?: string;
    title?: string;
  };
  achievements?: {
    id: number,
    attributes: {
      title: string,
      url: string,
      description: string,
      image: IPicture,
    }
  }[]
}
