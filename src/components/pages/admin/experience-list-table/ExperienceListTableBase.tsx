import {FC, useEffect, useState} from 'react';
import ExperienceListTableUI from './ExperienceListTableUI';
import {deleteExperience, ExperienceDTO, getExperiences} from '../../../../dao/experience.dao';

const ExperienceListTableBase: FC = () => {
  const [experiences, setExperiences] = useState<ExperienceDTO[]>([])

  useEffect(() => {
    getExperiences().then(setExperiences)
  }, [])

  const deleteExperienceOnClick = (id: string) => {
    deleteExperience(id).then(response => {
      if (response.ok) {
        getExperiences().then(setExperiences)
      }
    })
  }

  return <ExperienceListTableUI deleteExperience={deleteExperienceOnClick} experiences={experiences}/>
}

export default ExperienceListTableBase;