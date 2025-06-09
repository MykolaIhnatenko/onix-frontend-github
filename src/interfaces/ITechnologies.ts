export interface ITag {
  data: {
    id: number;
    attributes: {
      name: string;
    }
  }[]
}

export interface ITechnologie {
  id: number;
  attributes: {
    name: string;
  };
}

export interface ITechnologies {
  id: number;
  attributes: {
    name: string;
    order: number;
    tags: ITag;
  };
}

export interface ITechnologiesList {
  data?: ITechnologies[] | [];
}

export interface IDesignTag {
  id: number;
  attributes: {
    name: string;
  };
}

export interface IDesignTagList {
  data?: IDesignTag[] | [];
}

export interface ICareer {
  data: {
    id: number;
    attributes: {
      name: string;
    }
  }[]
}

export interface IDepartment {
  id: number;
  attributes: {
    name: string;
    careers: ICareer;
  };
}

export interface IDepartmentList {
  data?: IDepartment[] | [];
}
