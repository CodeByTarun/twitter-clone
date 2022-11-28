import React from 'react';
import { useTheme } from 'styled-components';
import { Username } from '../../Shared/Components';
import { BackArrowIcon } from '../../Shared/Icons';
import { FixedWidthSpacer, IconButton } from '../../Shared/Styled/MiscellaneousStyled';
import { HeaderDiv, PageViewDiv } from '../../Shared/Styled/PageStyled';
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
        <FixedWidthSpacer width='2rem'/>
        <Username isRow={false} secondaryText={'3,27773 Tweets'} isHeader={true}/>
      </HeaderDiv>
      <ProfileHeader/>

    </PageViewDiv>
  );
};

export default Profile;
 