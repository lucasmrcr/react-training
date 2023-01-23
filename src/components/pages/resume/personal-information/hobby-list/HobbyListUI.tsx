import {FC} from 'react';
import ButtonWrapperUI from './button-wrapper/ButtonWrapperUI';
import {AddHobbyOnClickedProps, HobbyListProps} from './HobbyList.types';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import styled from 'styled-components';

const HobbyListWrapper = styled.div`
`

const HobbyListGroup = styled(ListGroup)`
  margin: 10px 0;
`

const HobbyListUI: FC<HobbyListProps & AddHobbyOnClickedProps> = ({hobbies, addHobbyOnClicked}) => {

  return <HobbyListWrapper>
    <h5>Liste des Hobbies</h5>
    <HobbyListGroup>
      {hobbies && hobbies.map((hobby, index) => <ListGroupItem key={index}>{hobby.name}</ListGroupItem>)}
    </HobbyListGroup>
    <ButtonWrapperUI counter={hobbies.length}  addHobbyOnClicked={addHobbyOnClicked}/>
  </HobbyListWrapper>;
};

export default HobbyListUI;