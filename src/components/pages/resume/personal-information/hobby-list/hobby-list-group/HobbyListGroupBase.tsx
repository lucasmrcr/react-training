import {FC, useMemo} from 'react';
import HobbyListGroupUI from './HobbyListGroupUI';
import useHobbyList from '@hooks/hobby-list';

const HobbyListGroupBase: FC = () => {
  const [hobbies, _] = useHobbyList();
  return useMemo(() => <HobbyListGroupUI hobbies={hobbies}/>, [hobbies]);
}

export default HobbyListGroupBase;