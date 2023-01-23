import {FC, useState} from 'react';
import AddButtonUI from './AddButtonUI';
import CounterProps from '../../shared/CounterProps';

const AddButtonBase: FC<CounterProps> = ({counter, onClick}) => {
  return <AddButtonUI onClick={onClick} counter={counter}/>;
};

export default AddButtonBase;