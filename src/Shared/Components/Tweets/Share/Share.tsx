import React from 'react';
import { useTheme } from 'styled-components';
import { ShareIcon } from '../../../Icons';
import SvgStyled from '../../../Styled/SvgStyled';
import { IconContainer, TweetOptionButton } from '../styled';

export const Share: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <TweetOptionButton hoverColor={theme.colors.accent}>
      <IconContainer hoverColor={theme.colors.accent}>
        <SvgStyled color={theme.font.secondary}>
          <ShareIcon />
        </SvgStyled>
      </IconContainer>
    </TweetOptionButton>
  );
};
