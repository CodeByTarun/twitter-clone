import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import { devices } from '../../../Shared/globalConstants';
import { IconButton } from '../../../Shared/Styled/ButtonWrappers';
import SvgStyled from '../../../Shared/Styled/SvgStyled';
import { NavigationOptionDiv } from '../styled';

interface NavigationButtonProps {
  text: string;
  icon: ReactElement;
  hoverColor: string;
  iconColor: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  icon,
  hoverColor,
  iconColor,
}) => {
  const isDesktop = useMediaQuery({ query: devices.desktop });

  return (
    <NavigationOptionDiv>
      <IconButton hoverColor={hoverColor}>
        <SvgStyled color={iconColor}>{icon}</SvgStyled>
        {text !== '' && isDesktop && <p>{text}</p>}
      </IconButton>
    </NavigationOptionDiv>
  );
};

export default NavigationButton;
