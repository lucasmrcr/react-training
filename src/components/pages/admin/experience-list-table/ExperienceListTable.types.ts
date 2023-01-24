import {ExperienceDTO} from '../../../../dao/experience.dao';

export interface ExperienceListTableProps {
  experiences: ExperienceDTO[]
  deleteExperience: (id: string) => void
}