import styled from 'styled-components';
import {Card} from 'react-bootstrap';
import {FC} from 'react';
import {ExperienceListItemProps} from './ExperienceList.types';

const CardUI = styled(Card)`
  flex-direction: row;
  margin: 10px 0;
`
const CardImage = styled(Card.Img)`
  height: 100px;
  width: auto;
`

const ExperienceListItem: FC<ExperienceListItemProps> = ({experience}) => <CardUI style={{flexDirection: 'row'}}>
  <CardImage src={experience.image} />
  <Card.Body>
    <Card.Title>{experience.host}</Card.Title>
    <Card.Text>
      {experience.name}<br />
      <small className="text-muted">{experience.period}</small>
    </Card.Text>
  </Card.Body>
</CardUI>

export default ExperienceListItem