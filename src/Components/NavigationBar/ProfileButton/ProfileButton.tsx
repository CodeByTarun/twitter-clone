import React from 'react';
// import { useTheme } from "styled-components";
import { ProfileButtonStyled } from '../styled';

const ProfileButton: React.FC<{}> = () => {
  // const theme = useTheme();

  return (
    <ProfileButtonStyled>
      <p>Log In</p>
    </ProfileButtonStyled>
  );
};

export default ProfileButton;
