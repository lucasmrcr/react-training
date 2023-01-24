import {FC} from 'react';
import styled from 'styled-components';
import {ExperienceListProps} from './ExperienceList.types';
import ExperienceListItem from './ExperienceListItem';

const ExperienceContainer = styled.div`
`;

const ExperienceListUI: FC<ExperienceListProps> = ({experiences}) => <ExperienceContainer>
  <h2>Experiences</h2>
  {experiences.map(experience => <ExperienceListItem experience={experience} key={experience.id} />)}
</ExperienceContainer>;

export default ExperienceListUI;