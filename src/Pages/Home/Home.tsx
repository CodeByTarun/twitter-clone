import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ComposeTweet, Tweet } from '../../Shared/Components';
import { TopTweetsIcon } from '../../Shared/Icons';
import {
  HeaderText,
  IconButton,
  Spacer,
} from '../../Shared/Styled/MiscellaneousStyled';
import { HeaderDiv, PageViewDiv } from '../../Shared/Styled/PageStyled';
import SvgStyled from '../../Shared/Styled/SvgStyled';

const ComposeTweetContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const Home: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <PageViewDiv>
      <HeaderDiv>
        <HeaderText isBold={true}>Home</HeaderText>
        <Spacer />
        <IconButton padding="0.5rem" hoverColor={theme.font.primary}>
          <SvgStyled color={theme.font.primary}>
            <TopTweetsIcon />
          </SvgStyled>
        </IconButton>
      </HeaderDiv>
      <ComposeTweetContainer>
        <ComposeTweet />
      </ComposeTweetContainer>
      {/* Feed */}
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </PageViewDiv>
  );
};

export default Home;
