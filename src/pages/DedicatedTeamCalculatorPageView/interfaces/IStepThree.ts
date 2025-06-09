import { Dispatch, SetStateAction } from 'react';

export default interface IStepThree {
  setDomains: Dispatch<SetStateAction<string>>,
  currentDomain: string,
}
