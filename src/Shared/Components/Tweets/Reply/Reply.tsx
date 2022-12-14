import React from 'react';
import { useTheme } from 'styled-components';
import { ReplyIcon } from '../../../Icons';
import { SmallText } from '../../../Styled/MiscellaneousStyled';
import SvgStyled from '../../../Styled/SvgStyled';
import { IconContainer, TweetOptionButton } from '../styled';

export const Reply: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <TweetOptionButton hoverColor={theme.colors.accent}>
      <IconContainer hoverColor={theme.colors.accent}>
        <SvgStyled color={theme.font.secondary}>
          <ReplyIcon />
        </SvgStyled>
      </IconContainer>
      <SmallText>234</SmallText>
    </TweetOptionButton>
  );
};
