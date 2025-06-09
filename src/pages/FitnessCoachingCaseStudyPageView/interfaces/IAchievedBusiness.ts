export default interface IAchievedBusiness {
  blockTitle: string;
  data: IAchievedBusinessData[];
}

interface IAchievedBusinessData {
  id: string;
  title: string;
}
