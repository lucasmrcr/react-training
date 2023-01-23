import {FC} from 'react';
import styled from 'styled-components';
import profilePic from '../../../../assets/images/profile_pic.jpg';
import Picture from '@shared/picture';
import HobbyListBase from './hobby-list/HobbyListBase';

const PersonalInformationContainer = styled.div`
  background-color: gray;
  height: 100%;
`;

const ProfilePictureContainer = styled.div`
  padding: 20px;
  & > img {
    border-radius: 8px;
  }
`;

const PersonalNameUI = styled.h2`
  color: #f7f7f7;
`

const PersonalInformation: FC = () => <PersonalInformationContainer>
  <ProfilePictureContainer>
    <Picture src={profilePic}/>
    <PersonalNameUI>Lucas Mercier</PersonalNameUI>
    <HobbyListBase />
  </ProfilePictureContainer>
</PersonalInformationContainer>;

export default PersonalInformation;