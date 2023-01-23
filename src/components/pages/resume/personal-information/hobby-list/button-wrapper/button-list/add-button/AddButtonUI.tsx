import {FC} from 'react';
import Button from '@shared/button';
import CounterProps from '../../shared/CounterProps';
import {AddButtonProps} from './AddButton.types';

const AddButtonUI: FC<CounterProps & AddButtonProps> = ({onClick, counter, additionalCounter}) => <Button onClick={onClick}>
  Il y a {counter} clicks et {additionalCounter} useEffects
</Button>;

export default AddButtonUI;