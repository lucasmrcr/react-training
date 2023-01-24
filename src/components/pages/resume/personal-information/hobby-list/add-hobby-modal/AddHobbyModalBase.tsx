import {FC, RefObject, useRef} from 'react';
import AddHobbyModalUI from './AddHobbyModalUI';
import useHobbyList from '@hooks/hobby-list';

const AddHobbyModalBase: FC = () => {
  const inputHobbyNameRef = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;

  const [_, addHobby] = useHobbyList();

  const addHobbyOnClicked = () => {
    addHobby({name: inputHobbyNameRef?.current?.value ?? ''});
  }

  return <AddHobbyModalUI inputHobbyNameRef={inputHobbyNameRef} addHobby={addHobbyOnClicked} closeModal={() => {}} />
}

export default AddHobbyModalBase;