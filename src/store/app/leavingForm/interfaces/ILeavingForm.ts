export interface ILeavingForm {
  isShowLeavingForm: boolean;
  isLeavingFormSubmitted: boolean;
  isLoadingLeavingForm: boolean;
  modalView: LeavingFormModalVariants;
  isLeavingFormSendFromPage: boolean;
  isBlockShowLeavingForm: boolean;
}

export enum LeavingFormModalVariants {
  FORM = 'form',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ILeavingFormValues {
  name: string,
  email: string,
  company: string,
}
