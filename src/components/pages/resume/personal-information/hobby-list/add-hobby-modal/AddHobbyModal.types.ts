import {MutableRefObject, RefObject} from 'react';

export interface AddHobbyModalProps {
  closeModal: () => void;
  addHobby: () => void;
  inputHobbyNameRef: RefObject<HTMLInputElement> | null | undefined;
  showModal: boolean;
}