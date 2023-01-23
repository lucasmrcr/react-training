import {FC} from 'react';
import FormationListUI from './FormationListUI';
import useFormationList from '@hooks/formation-list';

const FormationListBase: FC = () => {
  const formations = useFormationList();

  return <FormationListUI formations={formations}/>;
};

export default FormationListBase;