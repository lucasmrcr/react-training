import Hobby from '../../../../../../types/hobby.type';

export interface HobbyListState {
  hobbies: Hobby[];
  showModal: boolean;
}

export type HobbyListAction = { type: 'ADD_HOBBY'; payload: Hobby; } | { type: 'SHOW_MODAL'; payload: boolean; };