import {createContext, Dispatch} from 'react';
import {HobbyListAction, HobbyListState, KeyMapHobbyListAction} from './hobby-list.types';
import hobbyListInitialState from './hobby-list.state';

const HobbyListContext = createContext<[HobbyListState, Dispatch<HobbyListAction<keyof KeyMapHobbyListAction>>]>([hobbyListInitialState, () => {}]);

export default HobbyListContext;