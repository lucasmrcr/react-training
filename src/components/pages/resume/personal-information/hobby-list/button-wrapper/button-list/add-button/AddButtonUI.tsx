import {FC} from 'react';
import Button from '@shared/button';
import {AddButtonCounterProps, AddButtonProps} from './AddButton.types';
import {AddHobbyOnClickedProps} from '../../../HobbyList.types';

const AddButtonUI: FC<AddHobbyOnClickedProps & AddButtonProps & AddButtonCounterProps> = ({addHobbyOnClicked, additionalCounter, counter}) => <Button onClick={addHobbyOnClicked}>
  {additionalCounter} useEffects
</Button>;

export default AddButtonUI;