import {HobbyListAction, HobbyListState, KeyMapHobbyListAction} from './hobby-list.types';

const hobbyListReducer = (state: HobbyListState, action: HobbyListAction<keyof KeyMapHobbyListAction>): HobbyListState => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return {hobbies: [...state.hobbies, action.payload]};
  }
  return state;
};

export default hobbyListReducer;