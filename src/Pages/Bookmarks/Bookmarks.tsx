import React from 'react';
import { useTheme } from 'styled-components';
import { ThreeDotsIcon } from '../../Shared/Icons';
import { HeaderText, IconButton, SmallText } from '../../Shared/Styled/MiscellaneousStyled';
import { HeaderDiv, HeaderTextContainer, PageViewDiv } from '../../Shared/Styled/PageStyled';
import SvgStyled from '../../Shared/Styled/SvgStyled';

const Bookmarks: React.FC<{}> = () => {

  const theme = useTheme();

  return (
    <PageViewDiv>
      <HeaderDiv>
        <HeaderTextContainer>
          <HeaderText isBold>Bookmarks</HeaderText>
          <SmallText>@CodeByTarun</SmallText>
        </HeaderTextContainer>
        <IconButton padding={'0.4rem'} hoverColor={theme.font.primary}>
          <SvgStyled color={theme.font.primary}>
            <ThreeDotsIcon/>
          </SvgStyled>
        </IconButton>
      </HeaderDiv>
    </PageViewDiv>
  );
};

export default Bookmarks;
