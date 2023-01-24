import {FC} from 'react';
import ButtonWrapperUI from './button-wrapper/ButtonWrapperUI';
import {HobbyListProps} from './HobbyList.types';
import styled from 'styled-components';
import AddHobbyModalBase from './add-hobby-modal/AddHobbyModalBase';
import HobbyListContext from './hobby-list-context/hobby-list.context';
import HobbyListGroupBase from './hobby-list-group/HobbyListGroupBase';

const HobbyListWrapper = styled.div`
`;

const HobbyListUI: FC<HobbyListProps> = ({hobbyListContextValue}) => <HobbyListContext.Provider
  value={hobbyListContextValue}>
  <HobbyListWrapper>
    <h5>Liste des Hobbies</h5>
    <HobbyListGroupBase />
    <ButtonWrapperUI/>
  </HobbyListWrapper>
  <AddHobbyModalBase/>
</HobbyListContext.Provider>;

export default HobbyListUI;