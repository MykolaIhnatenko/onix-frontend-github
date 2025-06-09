export interface ICareersContactForm {
  name: string,
  email: string,
  phone: string,
  country: string,
  howFoundOutAboutUs: string,
  message: string,
  jobVacancy: string,
  client: Blob[],
  [key: string]: string | Blob[];
}
