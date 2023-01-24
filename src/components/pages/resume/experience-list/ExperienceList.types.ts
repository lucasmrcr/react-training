import {ExperienceDTO} from '../../../../dao/experience.dao';

export interface ExperienceListProps {
  experiences: ExperienceDTO[];
}

export interface ExperienceListItemProps {
  experience: ExperienceDTO;
}