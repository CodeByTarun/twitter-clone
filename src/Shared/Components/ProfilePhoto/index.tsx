import React from 'react';
import styled from 'styled-components';
import ProfilePlaceholder from '../../../assets/profile-placeholder.png';

const Container = styled.div<{photoWidth: string}>`
  border-radius: 100px;
  height: ${p => p.photoWidth};
  width: ${p => p.photoWidth};
  min-height: 3rem;
  min-width: 3rem;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

interface ProfilePhotoProps {
  photoWidth?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({photoWidth = '3rem'}) => {
  return (
    <Container photoWidth={photoWidth}>
      <img src={ProfilePlaceholder} />
    </Container>
  );
};
