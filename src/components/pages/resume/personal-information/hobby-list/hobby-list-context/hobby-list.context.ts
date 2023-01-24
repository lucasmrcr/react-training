import {createContext, Dispatch} from 'react';
import {HobbyListAction, HobbyListState} from './hobby-list.types';
import hobbyListInitialState from './hobby-list.state';

const HobbyListContext = createContext<[HobbyListState, Dispatch<HobbyListAction>]>([hobbyListInitialState, () => {}]);

export default HobbyListContext;