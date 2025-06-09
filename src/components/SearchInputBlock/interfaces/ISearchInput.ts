export interface ISearchInputBlock {
  label: string;
  isCategories?: boolean;
  classes?: {
    inputBlock?: string;
  } & ISearchInput['classes'] & ISearchResults['classes'];
}

export interface ISearchInput {
  searchTerm: string;
  label: string;
  setSearchTerm: (term: string) => void;
  setResults: (items: IResult[] | []) => void;
  classes?: {
    inputContainer?: string;
    input?: string;
  };
}

export interface IResult {
  id: number | string;
  attributes: {
    title: string;
    url: string;
    categoryUrl?: string;
  }
}

export interface ISearchResponse {
  data?: IResult[];
}

export interface ISearchResults {
  results?: IResult[];
  searchTerm: string;
  isCategories?: boolean;
  classes?: {
    results?: string;
  };
}

export interface ISearchResultsItem {
  title?: string;
  searchTerm: string;
  isCategories?: boolean;
  attributes: {
    title: string;
    url: string;
    categoryUrl?: string;
  }
}
