import React from 'react';
import { useTheme } from 'styled-components';
import { ComposeTweet } from '../../Shared/Components/ComposeTweet/ComposeTweet';
import Tweets from '../../Shared/Components/Tweets';
import { TopTweetsIcon } from '../../Shared/Icons';
import { IconButton } from '../../Shared/Styled/ButtonWrappers';
import { Spacer } from '../../Shared/Styled/MiscellaneousStyled';
import {
  HeaderDiv,
  HeaderText,
  PageViewDiv,
  TopTweets,
} from '../../Shared/Styled/PageStyled';
import SvgStyled from '../../Shared/Styled/SvgStyled';

const Home: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <PageViewDiv>
      <HeaderDiv>
        <HeaderText>Home</HeaderText>
        <Spacer />
        <TopTweets>
          <IconButton padding="0.5rem" hoverColor={theme.font.primary}>
            <SvgStyled color={theme.font.primary}>
              <TopTweetsIcon />
            </SvgStyled>
          </IconButton>
        </TopTweets>
      </HeaderDiv>
      <ComposeTweet />
      {/* Feed */}
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
      <Tweets />
    </PageViewDiv>
  );
};

export default Home;
