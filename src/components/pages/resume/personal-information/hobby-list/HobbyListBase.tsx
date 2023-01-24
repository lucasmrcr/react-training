import {FC, useReducer} from 'react';
import HobbyListUI from './HobbyListUI';
import hobbyListReducer from './hobby-list-context/hobby-list.reducer';
import hobbyListInitialState from './hobby-list-context/hobby-list.state';

const HobbyListBase: FC = () => {
  const contextValue = useReducer(hobbyListReducer, hobbyListInitialState)
  return <HobbyListUI hobbyListContextValue={contextValue}/>
}

export default HobbyListBase;