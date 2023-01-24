import {RefObject} from 'react';

export interface AddExperienceFormProps {
  refName: RefObject<HTMLInputElement>;
  refHost: RefObject<HTMLInputElement>;
  refImage: RefObject<HTMLInputElement>;
  refPeriod: RefObject<HTMLInputElement>;
  onClick: () => void;

}