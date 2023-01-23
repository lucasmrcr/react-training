import {useState} from 'react';
import {Hobby} from '../../types';

const initialHobbyListState: Hobby[] = [
  {
    name: 'Football',
  },
  {
    name: 'Basketball',
  }
];

const useHobbyList: () => [Hobby[], (newHobby: Hobby) => void] = () => {
  const [hobbies, setHobbies] = useState(initialHobbyListState);

  const addHobby = (newHobby: Hobby) => {
    setHobbies(hobbies => [...hobbies, newHobby]);
  };

  return [hobbies, addHobby];
};

export default useHobbyList;