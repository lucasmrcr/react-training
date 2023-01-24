// @ts-ignore
import Hobby from "@types/hobby.type";

export interface HobbyListState {
  hobbies: Hobby[];
}

export type KeyMapHobbyListAction = {
  'ADD_HOBBY': Hobby;
}

export type HobbyListAction<T extends keyof KeyMapHobbyListAction> = {
  type: T;
  payload: KeyMapHobbyListAction[T]
};