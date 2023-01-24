import {FC} from 'react';
import {FormationListItemProps} from './FormationList.types';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const CardUI = styled(Card)`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`
const CardImage = styled(Card.Img)`
  height: fit-content;
  width: 100px;
`

const FormationListItem: FC<FormationListItemProps> = ({formation}) => <CardUI>
  <CardImage src={formation.picture} />
  <Card.Body>
    <Card.Title>{formation.name}</Card.Title>
    <Card.Text>
      {formation.host}<br />
      <small className="text-muted">{formation.period}</small>
    </Card.Text>
  </Card.Body>
</CardUI>

export default FormationListItem