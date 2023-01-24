import {FC, useContext, useEffect, useState} from 'react';
import AddButtonUI from './AddButtonUI';
import HobbyListContext from '../../../hobby-list-context/hobby-list.context';

const AddButtonBase: FC = () => {
  const [_, hobbyListDispatch] = useContext(HobbyListContext);

  const addHobbyOnClicked = () => {
    hobbyListDispatch({type: 'SHOW_MODAL', payload: true});
  };

  return <AddButtonUI onClick={addHobbyOnClicked} />;
};

export default AddButtonBase;