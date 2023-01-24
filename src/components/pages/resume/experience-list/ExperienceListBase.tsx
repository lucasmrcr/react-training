import {FC, useEffect, useState} from 'react';
import {ExperienceDTO, getExperiences} from '../../../../dao/experience.dao';
import ExperienceListUI from './ExperienceListUI';

const ExperienceListBase: FC = () => {
  const [experiences, setExperiences] = useState<ExperienceDTO[]>([]);

  useEffect(() => {
    getExperiences().then(experiences => setExperiences(() => experiences));
  }, []);

  return <ExperienceListUI experiences={experiences} />
};

export default ExperienceListBase;