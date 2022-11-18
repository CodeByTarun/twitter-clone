import React from 'react';
import styled from 'styled-components';
import { hexToRGB } from '../../helpers/Converters';

const IconButtonStyled = styled.div<{
  hoverColor: string;
  color: string;
  padding: string;
}>`
  display: flex;
  flex-direction: row;
  height: 100%;
  border-radius: 100px;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  align-items: center;

  :hover {
    background-color: ${(props) => hexToRGB(props.hoverColor, 0.1)};

    & path {
      fill: ${(props) => props.hoverColor} !important;
    }
  }

  & p {
    padding-left: 1.25rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.font.primary};
    padding-right: 0.75rem;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
`;

interface IconButtonProps {
  children?: React.ReactNode;
  color?: string;
  hoverColor?: string;
  padding?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  color = '',
  hoverColor = '',
  padding = '0.75rem',
}) => {
  return (
    <IconButtonStyled color={color} hoverColor={hoverColor} padding={padding}>
      {children}
    </IconButtonStyled>
  );
};
