import {FC, useState} from 'react';
import AdminUI from './AdminUI';
import {useNavigate} from 'react-router-dom';

const AdminBase: FC = () => {
  const [experienceIdToEdit, setExperienceIdToEdit] = useState<string | undefined>();
  const navigate = useNavigate();

  console.log('ar', experienceIdToEdit);
  const handleSetExperienceIdToEdit = (id: string) => {
    setExperienceIdToEdit(id);
    console.log(id);
    navigate('/admin#edit-experience');
  };


  return <AdminUI setExperienceIdToEdit={handleSetExperienceIdToEdit}/>;
};

export default AdminBase;