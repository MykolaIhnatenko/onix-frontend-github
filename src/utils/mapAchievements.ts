import IPicture from '../interfaces/IPicture';
import { BACKEND_URL } from '../constants/constants';

export interface IAchievementSimple {
  id: number;
  url: string;
  image: string;
}

interface IAchievementRaw {
  id: number;
  attributes: {
    url?: string;
    image?: IPicture;
  };
}

export default function mapAchievements(raw: unknown): IAchievementSimple[] {
  if (!Array.isArray(raw)) return [];

  const origin = BACKEND_URL.replace(/\/$/, '');

  return (raw as IAchievementRaw[])
    .map((item): IAchievementSimple | null => {
      const { id, attributes } = item ?? {};
      const url = attributes?.url ?? '';
      const imgPath = attributes?.image?.data?.attributes?.url ?? '';

      if (!id || !url || !imgPath) return null;

      const image = imgPath.startsWith('http') ? imgPath : `${origin}${imgPath}`;

      return { id, url, image };
    })
    .filter((x): x is IAchievementSimple => x !== null);
}
