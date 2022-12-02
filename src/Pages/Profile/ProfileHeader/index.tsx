import React from 'react'
import { ProfilePhoto } from '../../../Shared/Components'
import { FlexContainer, HeaderText, SecondaryText, Text } from '../../../Shared/Styled/MiscellaneousStyled'
import { DescriptionText, EditProfileButton, FollowContainer, HeaderPhotoContainer, LocationAndLinksContainer, ProfileAndEditContainer, ProfileContainer } from './styled'

export const ProfileHeader: React.FC<{}> = () => {
    return (
        <FlexContainer isVeritcal>
            <HeaderPhotoContainer/>
            <ProfileContainer>
                <ProfileAndEditContainer>
                    <ProfilePhoto/>
                    <EditProfileButton>
                        <Text isBold>Edit profile</Text>
                    </EditProfileButton>
                </ProfileAndEditContainer>
                <HeaderText isBold>CodeByTarun</HeaderText>
                <SecondaryText>@CodeByTarun</SecondaryText>
                <DescriptionText>Description</DescriptionText>
                <LocationAndLinksContainer>
                    <SecondaryText>Location</SecondaryText>
                    <SecondaryText>Links</SecondaryText>
                </LocationAndLinksContainer>

                <FollowContainer>
                    <SecondaryText><b>55</b> Following</SecondaryText>
                    <SecondaryText><b>0</b> Followers</SecondaryText>
                </FollowContainer>
            </ProfileContainer>
        </FlexContainer>
    )
}

// Things to consider
// There is a max height
// This height shrinks when the window gets small
// only the header photo and profile photo shrink
// aspect ratio of 3 for the header photo 