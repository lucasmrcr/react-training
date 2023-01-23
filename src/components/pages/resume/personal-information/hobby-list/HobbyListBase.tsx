import {FC} from 'react';
import useHobbyList from '@hooks/hobby-list';
import HobbyListUI from './HobbyListUI';

const HobbyListBase: FC = () => {
  const [hobbies, addHobby] = useHobbyList();

  const addHobbyWhenClicked = () => addHobby({name: 'Nouveau Hobby'})

  return <HobbyListUI hobbies={hobbies} addHobbyOnClicked={addHobbyWhenClicked}/>
}

export default HobbyListBase;