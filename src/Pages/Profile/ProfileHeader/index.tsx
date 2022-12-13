import React from 'react';
import styled from 'styled-components';
import { ProfilePhoto } from '../../../Shared/Components';
import {
  FlexContainer,
  HeaderText,
  LinkStyled,
  SecondaryText,
  Text,
} from '../../../Shared/Styled/MiscellaneousStyled';
import {
  DescriptionText,
  EditProfileButton,
  FollowContainer,
  HeaderPhotoContainer,
  LocationAndLinksContainer,
  ProfileAndEditContainer,
  ProfileContainer,
  ProfilePhotoContainer,
} from './styled';

const FollowLink = styled(LinkStyled)`
  :hover {
    ${SecondaryText} {
      text-decoration: underline;
      text-decoration-color: ${(p) => p.theme.font.primary};
    }
  }
`;

export const ProfileHeader: React.FC<{}> = () => {
  return (
    <FlexContainer isVertical={true}>
      <HeaderPhotoContainer />
      <ProfileContainer isVertical={true}>
        <ProfileAndEditContainer>
          <ProfilePhotoContainer>
            <ProfilePhoto photoWidth="100%" />
          </ProfilePhotoContainer>
          <EditProfileButton>
            <Text isBold>Edit profile</Text>
          </EditProfileButton>
        </ProfileAndEditContainer>
        <HeaderText isBold>CodeByTarun</HeaderText>
        <SecondaryText>@CodeByTarun</SecondaryText>
        <DescriptionText>Description...</DescriptionText>
        <LocationAndLinksContainer isVertical={false}>
          <SecondaryText>Location</SecondaryText>
          <SecondaryText>Links</SecondaryText>
        </LocationAndLinksContainer>

        <FollowContainer isVertical={false}>
          <FollowLink to={'following'}>
            <SecondaryText>
              <b>55</b> Following
            </SecondaryText>
          </FollowLink>
          <FollowLink to={'followers'}>
            <SecondaryText>
              <b>0</b> Followers
            </SecondaryText>
          </FollowLink>
        </FollowContainer>
      </ProfileContainer>
    </FlexContainer>
  );
};

// Things to consider
// There is a max height
// This height shrinks when the window gets small
// only the header photo and profile photo shrink
// aspect ratio of 3 for the header photo
