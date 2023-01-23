import {FC} from 'react';
import styled from 'styled-components';
import Picture from '../shared/Picture';
import profilePic from  '../../assets/images/profile_pic.jpg'

const PersonalInformationContainer = styled.div`
  height: 100vh;
  background-color: yellow;
`;

const PersonalInformation: FC = () => <PersonalInformationContainer>
  <Picture src={profilePic} />
</PersonalInformationContainer>;

export default PersonalInformation;