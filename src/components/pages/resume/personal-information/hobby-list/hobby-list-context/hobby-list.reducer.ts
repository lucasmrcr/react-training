import {HobbyListAction, HobbyListState} from './hobby-list.types';

const hobbyListReducer = (state: HobbyListState, action: HobbyListAction): HobbyListState => {
  switch (action.type) {
    case 'ADD_HOBBY':
      const hobbies = [...state.hobbies, action.payload];
      localStorage.setItem('hobbies', JSON.stringify(hobbies));
      return {...state, hobbies: hobbies};
    case 'SHOW_MODAL':
      return {...state, showModal: action.payload};
  }
  return state;
};

export default hobbyListReducer;