import React from 'react';
// import { useTheme } from "styled-components";
import { ProfileButtonStyled } from '../styled';

const ProfileButton: React.FC<{}> = () => {
  
  // TODO: logout fn
  // const logout = async () => {};

  return (
    <ProfileButtonStyled>
      <p>Log In</p>
    </ProfileButtonStyled>
  );
};

export default ProfileButton;
