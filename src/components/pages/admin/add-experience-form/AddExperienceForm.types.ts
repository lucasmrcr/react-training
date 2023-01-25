import {ChangeEvent, RefObject} from 'react';

export interface AddExperienceFormProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeHost: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePeriod: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;

}