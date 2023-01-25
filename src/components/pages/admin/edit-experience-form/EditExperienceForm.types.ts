import {ChangeEvent} from 'react';

export interface EditExperienceFormProps {
  onChangeId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeHost: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePeriod: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}