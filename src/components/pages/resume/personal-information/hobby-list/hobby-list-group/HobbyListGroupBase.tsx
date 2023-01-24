import {FC} from 'react';
import HobbyListGroupUI from './HobbyListGroupUI';
import useHobbyList from '@hooks/hobby-list';

const HobbyListGroupBase: FC = () => {
  const [hobbies, _] = useHobbyList();
  return <HobbyListGroupUI hobbies={hobbies} />
}

export default HobbyListGroupBase;