import React from 'react';
import { useTheme } from 'styled-components';
import { RetweetIcon } from '../../../Icons';
import { SmallText } from '../../../Styled/MiscellaneousStyled';
import SvgStyled from '../../../Styled/SvgStyled';
import { IconContainer, TweetOptionButton } from '../styled';

const RetweetColor = '#00BA7C';

export const Retweet: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <TweetOptionButton hoverColor={RetweetColor}>
      <IconContainer hoverColor={RetweetColor}>
        <SvgStyled color={theme.font.secondary}>
          <RetweetIcon />
        </SvgStyled>
      </IconContainer>
      <SmallText>33</SmallText>
    </TweetOptionButton>
  );
};
