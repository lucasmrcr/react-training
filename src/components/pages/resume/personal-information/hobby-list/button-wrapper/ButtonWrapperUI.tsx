import {FC} from 'react';
import ButtonListUI from './button-list/ButtonListUI';
import {AddHobbyOnClickedProps} from '../HobbyList.types';
import {AddButtonCounterProps} from './button-list/add-button/AddButton.types';

const ButtonWrapperUI: FC<AddHobbyOnClickedProps & AddButtonCounterProps> = ({addHobbyOnClicked, counter}) =>
  <ButtonListUI addHobbyOnClicked={addHobbyOnClicked} counter={counter}/>;

export default ButtonWrapperUI;