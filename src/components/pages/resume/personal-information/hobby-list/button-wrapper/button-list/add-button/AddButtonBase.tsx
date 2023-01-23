import {FC, useEffect, useState} from 'react';
import AddButtonUI from './AddButtonUI';
import CounterProps from '../../shared/CounterProps';

const AddButtonBase: FC<CounterProps> = ({counter, onClick}) => {
  const [additionalCounter, setAdditionalCounter] = useState(0);

  useEffect(() => {
    setAdditionalCounter(additionalCounter => additionalCounter + 10);
  }, [counter]);

  return <AddButtonUI onClick={onClick} counter={counter} additionalCounter={additionalCounter} />;
};

export default AddButtonBase;