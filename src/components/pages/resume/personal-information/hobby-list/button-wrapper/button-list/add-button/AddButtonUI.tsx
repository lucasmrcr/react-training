import {FC} from 'react';
import {AddButtonProps} from './AddButton.type';
import Button from '@shared/button';

const AddButtonUI: FC<AddButtonProps> = ({onClick, counter}) => <Button onClick={onClick}>
  Il y a {counter} clicks
</Button>;

export default AddButtonUI;