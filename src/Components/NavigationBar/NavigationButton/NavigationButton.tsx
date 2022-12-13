import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { devices } from '../../../Shared/globalConstants';
import {
  HeaderText,
  IconButton,
} from '../../../Shared/Styled/MiscellaneousStyled';
import SvgStyled from '../../../Shared/Styled/SvgStyled';
import { NavigationOptionDiv } from '../styled';

const NavigationHeaderText = styled(HeaderText)`
  padding-left: 1.25rem;
  padding-right: 1rem;
  font-size: 1.25em;
`;

interface NavigationButtonProps {
  text: string;
  icon: ReactElement;
  hoverColor: string;
  iconColor: string;
  padding?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  icon,
  hoverColor,
  iconColor,
  padding = '0.8rem',
}) => {
  const isDesktop = useMediaQuery({ query: devices.desktop });

  return (
    <NavigationOptionDiv>
      <IconButton hoverColor={hoverColor} padding={padding}>
        <SvgStyled color={iconColor}>{icon}</SvgStyled>
        {text !== '' && isDesktop && (
          <NavigationHeaderText>{text}</NavigationHeaderText>
        )}
      </IconButton>
    </NavigationOptionDiv>
  );
};

export default NavigationButton;
