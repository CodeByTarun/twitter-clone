import React from 'react';
import { useTheme } from 'styled-components';
import { Username } from '../../Shared/Components';
import { ThreeDotsIcon } from '../../Shared/Icons';
import { IconButton, Spacer } from '../../Shared/Styled/MiscellaneousStyled';
import { HeaderDiv, PageViewDiv } from '../../Shared/Styled/PageStyled';
import SvgStyled from '../../Shared/Styled/SvgStyled';

const Bookmarks: React.FC<{}> = () => {

  const theme = useTheme();

  return (
    <PageViewDiv>
      <HeaderDiv>
        <Username isRow={false} isHeader={true} primaryText={'Bookmarks'} secondaryText={'@CodeByTarun'}/>
        <Spacer/>
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
