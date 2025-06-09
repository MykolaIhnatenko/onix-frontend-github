import { Dispatch, SetStateAction } from 'react';

export default interface IStepFour {
  duration: string,
  setDuration: Dispatch<SetStateAction<string>>
}
