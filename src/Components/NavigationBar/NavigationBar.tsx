import React from 'react';
import { NavigationDiv, TwitterHeaderDiv } from './styled';
import SvgStyled from '../../Shared/Styled/SvgStyled';
import { TwitterIcon } from '../../Shared/Icons';
import { IconButton } from '../../Shared/Styled/ButtonWrappers';
import { useTheme } from 'styled-components';

const NavigationBar: React.FC<{}> = () => {

  const theme = useTheme();

  return (
    <NavigationDiv>
      <TwitterHeaderDiv>
        <IconButton fn={() => {}} hoverColor={theme.colors.accent}>
          <SvgStyled color={theme.colors.accent}>
            <TwitterIcon/>
          </SvgStyled>
        </IconButton>
      </TwitterHeaderDiv>
    </NavigationDiv>
  );
};

export default NavigationBar;

