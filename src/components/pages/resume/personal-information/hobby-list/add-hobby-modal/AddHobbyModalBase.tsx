import {FC, RefObject, useContext, useMemo, useRef} from 'react';
import AddHobbyModalUI from './AddHobbyModalUI';
import useHobbyList from '@hooks/hobby-list';
import HobbyListContext from '../hobby-list-context/hobby-list.context';

const AddHobbyModalBase: FC = () => {
  const inputHobbyNameRef = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;
  const [_, addHobby] = useHobbyList();
  const [hobbyListState, hobbyListDispatch] = useContext(HobbyListContext);

  const addHobbyOnClicked = () => {
    addHobby({name: inputHobbyNameRef?.current?.value ?? ''});
    hobbyListDispatch({type: 'SHOW_MODAL', payload: false});
  };

  return useMemo(
    () => <AddHobbyModalUI showModal={hobbyListState.showModal} inputHobbyNameRef={inputHobbyNameRef}
                           addHobby={addHobbyOnClicked} closeModal={() => {
    }}/>,
    [hobbyListState.showModal]
  );
};

export default AddHobbyModalBase;