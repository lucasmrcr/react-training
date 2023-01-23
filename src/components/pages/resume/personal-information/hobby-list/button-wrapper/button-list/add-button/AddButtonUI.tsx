import {FC} from 'react';
import Button from '@shared/button';
import CounterProps from '../../shared/CounterProps';

const AddButtonUI: FC<CounterProps> = ({onClick, counter}) => <Button onClick={onClick}>
  Il y a {counter} clicks
</Button>;

export default AddButtonUI;