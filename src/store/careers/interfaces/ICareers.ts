export enum CareersFormModalVariants {
  CAREERS_FORM = 'form',
  CAREERS_SUCCESS = 'success',
  CAREERS_ERROR = 'error',
}

export interface ICareers {
  isLoadingCareersForm: boolean;
  isShowCareersModal: boolean;
  careersModalView: CareersFormModalVariants;
}
