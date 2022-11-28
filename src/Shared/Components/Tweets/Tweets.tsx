import React from 'react';
import { useTheme } from 'styled-components';
import { ProfilePhoto } from '..';
import { ThreeDotsIcon } from '../../Icons';
import { Spacer } from '../../Styled/MiscellaneousStyled';
import SvgStyled from '../../Styled/SvgStyled';
import { Username } from '../Username';
import Like from './Like';
import Reply from './Reply';
import Retweet from './Retweet';
import Share from './Share';
import {
  Container,
  TweetBody,
  TweetHeader,
  TweetOptions,
  ThreeDots,
} from './styled';

export const Tweets: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <Container>
      <ProfilePhoto />
      <TweetBody>
        <TweetHeader>
          <Username secondaryText={'@CodeByTarun'}/>
          <Spacer />
          <ThreeDots>
            <SvgStyled color={theme.font.primary}>
              <ThreeDotsIcon />
            </SvgStyled>
          </ThreeDots>
        </TweetHeader>

        <p>
          LOREM DSOFSDFSL L:DFJS:F SDDF:SLJ FSDLOREM DSOFSDFSL L:DFJS:F SDDF:SLJ
          FSDLOREM DSOFSDFSL L:DFJS:F SDDF:SLJ FSDLOREM DSOFSDFSL L:DFJS:F
          SDDF:SLJ FSDLOREM DSOFSDFSL L:DFJS:F SDDF:SLJ FSD
        </p>

        <TweetOptions>
          <Reply />
          <Retweet />
          <Like />
          <Share />
        </TweetOptions>
      </TweetBody>
    </Container>
  );
};
