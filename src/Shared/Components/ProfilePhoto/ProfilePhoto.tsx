import React from 'react';
import styled from 'styled-components';
import ProfilePlaceholder from '../../../assets/profile-placeholder.png';

const Container = styled.div`
  border-radius: 100px;
  height: 100%;
  width: 100%;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ProfilePhoto: React.FC<{}> = () => {
  return (
    <Container>
      <img src={ProfilePlaceholder} />
    </Container>
  );
};
