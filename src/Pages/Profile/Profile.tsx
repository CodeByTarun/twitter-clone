import React from 'react';
import { useTheme } from 'styled-components';
import { BackArrowIcon } from '../../Shared/Icons';
import { FixedWidthSpacer, HeaderText, IconButton, SmallText } from '../../Shared/Styled/MiscellaneousStyled';
import { HeaderDiv, HeaderTextContainer, PageViewDiv } from '../../Shared/Styled/PageStyled';
import SvgStyled from '../../Shared/Styled/SvgStyled';
import { ProfileHeader } from './ProfileHeader';

const Profile: React.FC<{}> = () => {

  const theme = useTheme();

  return (
    <PageViewDiv>
      <HeaderDiv>
        <IconButton hoverColor={theme.font.primary} padding="0.4rem">
          <SvgStyled color={theme.font.primary}>
            <BackArrowIcon/>
          </SvgStyled>
        </IconButton>
        <FixedWidthSpacer width='1rem'/>
        <HeaderTextContainer>
          <HeaderText isBold>CodeByTarun</HeaderText>
          <SmallText>1 Tweet</SmallText>
        </HeaderTextContainer>
      </HeaderDiv>
      <ProfileHeader/>
 
    </PageViewDiv>
  );
};

export default Profile;
 