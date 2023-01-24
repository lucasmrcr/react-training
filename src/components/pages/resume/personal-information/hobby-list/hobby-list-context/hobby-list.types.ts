// @ts-ignore
import Hobby from "@types/hobby.type";

export interface HobbyListState {
  hobbies: Hobby[];
  showModal: boolean;
}

export type KeyMapHobbyListAction = {
  'ADD_HOBBY': Hobby;
  'SHOW_MODAL': boolean;
}

export type HobbyListAction<T extends keyof KeyMapHobbyListAction> = {
  type: T;
  payload: KeyMapHobbyListAction[T]
};