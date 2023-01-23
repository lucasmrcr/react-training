import {FC} from 'react';
import ButtonListUI from './button-list/ButtonListUI';
import CounterProps from './shared/CounterProps';

const ButtonWrapperUI: FC<CounterProps> = ({counter, onClick}) => <ButtonListUI counter={counter} onClick={onClick} />

export default ButtonWrapperUI