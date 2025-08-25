interface IAchievementsCarouselRow {
  items: { id: string | number; url: string, image: string }[];
  itemClassName: string;
  reverse?: boolean;
  speedPxPerSec?: number;
}

export default IAchievementsCarouselRow;
