import {FC} from 'react';
import styled from 'styled-components';
import profilePic from '../../../assets/images/profile_pic.jpg';
import Picture from '../../shared/Picture';

const PersonalInformationContainer = styled.div`
  background-color: gray;
`;

const ProfilePictureContainer = styled.div`
  padding: 20px;
  & > img {
    border-radius: 8px;
  }
`;

const PersonalInformation: FC = () => <PersonalInformationContainer>
  <ProfilePictureContainer>
    <Picture src={profilePic}/>
  </ProfilePictureContainer>
</PersonalInformationContainer>;

export default PersonalInformation;