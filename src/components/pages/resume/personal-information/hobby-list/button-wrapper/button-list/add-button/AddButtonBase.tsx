import {FC, useState} from 'react';
import AddButtonUI from './AddButtonUI';

const AddButtonBase: FC = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(counter => counter + 1);
  };
  return <AddButtonUI onClick={onClick} counter={counter}/>;
};

export default AddButtonBase;