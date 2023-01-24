import {FC} from 'react';
import Button from '@shared/button';
import {AddButtonProps} from './AddButton.types';

const AddButtonUI: FC<AddButtonProps> = ({onClick}) => <Button onClick={onClick}>
  Ajouter un hobby
</Button>;

export default AddButtonUI;