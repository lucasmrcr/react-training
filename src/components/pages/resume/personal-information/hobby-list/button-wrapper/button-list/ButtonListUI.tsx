import {FC} from 'react';
import AddButtonBase from './add-button/AddButtonBase';
import {AddHobbyOnClickedProps} from '../../HobbyList.types';
import {AddButtonCounterProps} from './add-button/AddButton.types';

const ButtonListUI: FC<AddHobbyOnClickedProps & AddButtonCounterProps> = ({addHobbyOnClicked, counter}) =>
  <AddButtonBase
    addHobbyOnClicked={addHobbyOnClicked} counter={counter}/>;

export default ButtonListUI;