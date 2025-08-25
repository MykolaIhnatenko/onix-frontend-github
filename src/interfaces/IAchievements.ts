import IPicture from './IPicture';

export default interface IAchievements {
  achievements: {
    id: number,
    attributes: {
      title: string,
      url: string,
      description: string,
      image: IPicture,
    }
  }[]
}
