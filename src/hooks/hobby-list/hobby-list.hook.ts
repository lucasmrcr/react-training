import {useContext, useState} from 'react';
import HobbyListContext
  from '../../components/pages/resume/personal-information/hobby-list/hobby-list-context/hobby-list.context';
import Hobby from '../../types/hobby.type';


const useHobbyList: () => [Hobby[], (newHobby: Hobby) => void] = () => {
  const [hobbyListState, hobbyListDispatch] = useContext(HobbyListContext);

  const addHobby = (newHobby: Hobby) => {
    hobbyListDispatch({type: 'ADD_HOBBY', payload: newHobby});
  };

  return [hobbyListState.hobbies, addHobby];
};

export default useHobbyList;