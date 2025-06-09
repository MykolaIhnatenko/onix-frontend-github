import IPicture from '../../../interfaces/IPicture';

export default interface IWhitepappersBanner {
  title?: string;
  date?: string;
  image?: IPicture;
  bookletUrl?: string;
  mailerliteId?: string
  views?: number;
}
