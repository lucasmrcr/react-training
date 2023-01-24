import {useContext, useState} from 'react';
import {Hobby} from '../../types';
import HobbyListContext
  from '../../components/pages/resume/personal-information/hobby-list/hobby-list-context/hobby-list.context';

const useHobbyList: () => [Hobby[], (newHobby: Hobby) => void] = () => {
  const [hobbyListState, hobbyListDispatch] = useContext(HobbyListContext);

  const addHobby = (newHobby: Hobby) => {
    hobbyListDispatch({type: 'ADD_HOBBY', payload: newHobby});
  };

  console.log(hobbyListState.hobbies);

  return [hobbyListState.hobbies, addHobby];
};

export default useHobbyList;