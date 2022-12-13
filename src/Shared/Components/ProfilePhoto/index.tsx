import React from 'react';
import styled from 'styled-components';
import ProfilePlaceholder from '../../../assets/profile-placeholder.png';

const ImageStyle = styled.img<{ photoWidth: string }>`
  width: ${(p) => p.photoWidth};
  height: ${(p) => p.photoWidth};
  object-fit: fill;
  border-radius: 50%;
`;

interface ProfilePhotoProps {
  photoWidth?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  photoWidth = '3rem',
}) => {
  return <ImageStyle photoWidth={photoWidth} src={ProfilePlaceholder} />;
};

// border-radius: 100px;
//   border-width: 1px;
//   border-style: solid;
//   border-color: blue;
//   width: ${p => p.photoWidth};
//   height: ${p => p.photoWidth};
//   min-height: 3rem;
//   min-width: 3rem;
//   overflow: hidden;
