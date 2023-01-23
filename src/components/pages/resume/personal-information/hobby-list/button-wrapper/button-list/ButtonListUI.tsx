import {FC} from 'react';
import AddButtonBase from './add-button/AddButtonBase';
import CounterProps from '../shared/CounterProps';

const ButtonListUI: FC<CounterProps> = ({counter, onClick}) => <AddButtonBase onClick={onClick} counter={counter} />

export default ButtonListUI;