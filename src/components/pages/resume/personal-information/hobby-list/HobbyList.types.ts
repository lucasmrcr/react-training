import {Hobby} from '../../../../../types';

export interface HobbyListProps {
  hobbies: Hobby[]
}

export interface AddHobbyOnClickedProps {
  addHobbyOnClicked: () => void
}