import {FC} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import styled from 'styled-components';
import {HobbyListGroupProps} from './HobbyListGroup.types';

const HobbyListGroup = styled(ListGroup)`
  margin: 10px 0;
`;

const HobbyListGroupUI: FC<HobbyListGroupProps> = ({hobbies}) => <HobbyListGroup>
  {hobbies && hobbies.map((hobby, index) => <ListGroupItem key={index}>{hobby.name}</ListGroupItem>)}
</HobbyListGroup>

export default HobbyListGroupUI;