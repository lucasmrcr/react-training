import {FC} from 'react';
import styled from 'styled-components';
import {FormationListProps} from './FormationList.types';
import FormationListItem from './FormationListItem';

const FormationContainer = styled.div`
`;

const FormationListUI: FC<FormationListProps> = ({formations}) => <FormationContainer>
  {formations && formations.map((formation, index) => <FormationListItem formation={formation} key={index} />)}
</FormationContainer>;

export default FormationListUI