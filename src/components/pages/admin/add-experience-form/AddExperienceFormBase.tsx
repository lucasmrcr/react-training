import {FC, RefObject, useRef} from 'react';
import AddExperienceFormUI from './AddExperienceFormUI';
import {ExperienceDTO, saveExperience} from '../../../../dao/experience.dao';

const AddExperienceFormBase: FC = () => {
  const refHost = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;
  const refImage = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;
  const refName = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;
  const refPeriod = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;

  const saveExperienceOnClick = () => {
    const experience: ExperienceDTO = {
      name: refName.current?.value ?? '',
      image: refImage.current?.value ?? '',
      host: refHost.current?.value ?? '',
      period: refPeriod.current?.value ?? '',
    }

    saveExperience(experience).then(console.log);
  }

  return <AddExperienceFormUI refHost={refHost} refImage={refImage} refName={refName} refPeriod={refPeriod} onClick={saveExperienceOnClick} />;
}

export default AddExperienceFormBase;