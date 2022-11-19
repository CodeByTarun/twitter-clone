import React from 'react';
import { useTheme } from 'styled-components';
import { LikeIcon } from '../../../Icons';
import SvgStyled from '../../../Styled/SvgStyled';
import { IconContainer, TweetOptionButton } from '../styled';

const LikeColor = '#F91880';

export const Like: React.FC<{}> = () => {

  const theme = useTheme();

  return (
    <TweetOptionButton hoverColor={LikeColor}>
      <IconContainer hoverColor={LikeColor}>
        <SvgStyled color={theme.font.secondary}>
          <LikeIcon />
        </SvgStyled>
      </IconContainer>
      <p>53</p>
    </TweetOptionButton>
  );
};
