import {ChangeEvent, FC, RefObject, useRef} from 'react';
import AddExperienceFormUI from './AddExperienceFormUI';
import {ExperienceDTO, saveExperience} from '../../../../dao/experience.dao';
import {redirect, useNavigate} from 'react-router-dom';

const AddExperienceFormBase: FC = () => {
  const values = {
    host: '',
    image: '',
    name: '',
    period: ''
  };

  const handleChange = (key: keyof typeof values) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      values[key] = event.target.value;
    };
  };

  const navigate = useNavigate()

  const saveExperienceOnClick = async () => {
    const experience: ExperienceDTO = {
      name: values.name,
      image: values.image,
      host: values.host,
      period: values.period,
    };

    await saveExperience(experience);
    navigate('/')
  };

  return <AddExperienceFormUI onChangeHost={handleChange('host')}
                              onChangeName={handleChange('name')}
                              onChangeImage={handleChange('image')}
                              onChangePeriod={handleChange('period')}
                              onClick={saveExperienceOnClick}/>;
};

export default AddExperienceFormBase;