import {FC, useState} from 'react';
import ButtonWrapperUI from './button-wrapper/ButtonWrapperUI';

const HobbyListUI: FC = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter => counter + 1);
  }

  return <ButtonWrapperUI counter={counter} onClick={onClick}/>;
};

export default HobbyListUI;