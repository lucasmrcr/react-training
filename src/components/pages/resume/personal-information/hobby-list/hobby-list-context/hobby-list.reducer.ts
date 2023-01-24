import {HobbyListAction, HobbyListState, KeyMapHobbyListAction} from './hobby-list.types';
import Hobby from '../../../../../../types/hobby.type';

const hobbyListReducer = (state: HobbyListState, action: HobbyListAction<keyof KeyMapHobbyListAction>): HobbyListState => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return {...state, hobbies: [...state.hobbies, action.payload as Hobby]};
    case 'SHOW_MODAL':
      return {...state, showModal: action.payload as boolean};
  }
  return state;
};

export default hobbyListReducer;