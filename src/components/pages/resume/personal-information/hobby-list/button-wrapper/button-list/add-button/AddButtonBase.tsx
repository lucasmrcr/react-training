import {FC, useEffect, useState} from 'react';
import AddButtonUI from './AddButtonUI';
import {AddHobbyOnClickedProps} from '../../../HobbyList.types';
import {AddButtonCounterProps} from './AddButton.types';

const AddButtonBase: FC<AddHobbyOnClickedProps & AddButtonCounterProps> = ({addHobbyOnClicked, counter}) => {
  const [additionalCounter, setAdditionalCounter] = useState(0);

  useEffect(() => {
    setAdditionalCounter(additionalCounter => additionalCounter + 10);
  }, [counter]);

  return <AddButtonUI addHobbyOnClicked={addHobbyOnClicked} additionalCounter={additionalCounter} counter={counter} />;
};

export default AddButtonBase;