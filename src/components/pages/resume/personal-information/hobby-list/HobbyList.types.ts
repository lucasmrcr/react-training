import HobbyListState from './hobby-list-context/hobby-list.state';
import {Dispatch} from 'react';
import {HobbyListAction, KeyMapHobbyListAction} from './hobby-list-context/hobby-list.types';

export interface HobbyListProps {
  hobbyListContextValue:  [typeof HobbyListState, Dispatch<HobbyListAction<keyof KeyMapHobbyListAction>>]
}