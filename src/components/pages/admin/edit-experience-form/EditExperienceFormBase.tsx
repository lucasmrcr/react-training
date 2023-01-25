import {ChangeEvent, FC} from 'react';
import EditExperienceFormUI from './EditExperienceFormUI';
import {editExperience, ExperienceDTO} from '../../../../dao/experience.dao';
import {useNavigate} from 'react-router-dom';

const EditExperienceFormBase: FC = () => {
  const values = {
    id: '',
    host: '',
    image: '',
    name: '',
    period: ''
  };

  const navigate = useNavigate();

  const handleChange = (key: keyof typeof values) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      values[key] = event.target.value;
    };
  };

  const editExperienceOnClick = async () => {
    const experience: ExperienceDTO = {
      name: values.name,
      image: values.image,
      host: values.host,
      period: values.period,
      id: values.id
    };
    await editExperience(experience);
    navigate('/admin#list-experience');
  };

  return <EditExperienceFormUI onChangeHost={handleChange('host')}
                               onChangeId={handleChange('id')}
                               onChangeName={handleChange('name')}
                               onChangeImage={handleChange('image')}
                               onChangePeriod={handleChange('period')}
                               onClick={editExperienceOnClick}/>;
};

export default EditExperienceFormBase;