export default interface IBlogCategory {
  data?:[{
    id?: number;
    attributes?: {
      url:string;
      title:string;
      blogSubcategories?: {
        data: [{
          id?: number;
          attributes?: {
            name:string;
            url: string;
          }
        }]
      }
    }
  }] | [],
}
