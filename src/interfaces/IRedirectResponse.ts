export interface IRedirect {
  id?: string,
  attributes?:{
    url?: string,
    redirectToUrl?: string
  }
}

export interface IRedirectResponse {
  data: [IRedirect]
}
