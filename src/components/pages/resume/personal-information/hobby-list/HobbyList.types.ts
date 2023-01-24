import HobbyListState from './hobby-list-context/hobby-list.state';
import {Dispatch} from 'react';
import {HobbyListAction} from './hobby-list-context/hobby-list.types';

export interface HobbyListProps {
  hobbyListContextValue:  [typeof HobbyListState, Dispatch<HobbyListAction>]
}