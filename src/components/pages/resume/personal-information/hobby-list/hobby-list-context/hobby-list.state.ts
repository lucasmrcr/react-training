import {HobbyListState} from './hobby-list.types';

const hobbyListInitialState: HobbyListState = {
  hobbies: JSON.parse(localStorage.getItem('hobbies') || '[]'),
  showModal: false
};

export default hobbyListInitialState;