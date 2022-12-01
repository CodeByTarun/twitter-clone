import React from 'react';
import { useTheme } from 'styled-components';
import { ProfilePhoto } from '..';
import { ThreeDotsIcon } from '../../Icons';
import { SecondaryText, Spacer, Text } from '../../Styled/MiscellaneousStyled';
import SvgStyled from '../../Styled/SvgStyled';
import Like from './Like';
import Reply from './Reply';
import Retweet from './Retweet';
import Share from './Share';
import {
  Container,
  ThreeDots,
  TweetBody,
  TweetHeader,
  TweetOptions,
} from './styled';

export const Tweet: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <Container>
      <ProfilePhoto />
      <TweetBody>
        <TweetHeader>
          <Text isBold>CodeByTarun</Text>
          <SecondaryText>@CodeByTarun</SecondaryText>
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
