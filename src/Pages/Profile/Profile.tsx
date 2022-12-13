import React from 'react';
import Header from '../../Shared/Components/Header';
import { PageViewDiv } from '../../Shared/Styled/PageStyled';
import ProfileBody from './ProfileBody';
import { ProfileHeader } from './ProfileHeader';

const Profile: React.FC<{}> = () => {
  return (
    <PageViewDiv>
      <Header
        headerText="CodeByTarun"
        subHeaderText="1 Tweet"
        backButtonLink={'/home'}
      />
      <ProfileHeader />
      <ProfileBody />
    </PageViewDiv>
  );
};

export default Profile;
