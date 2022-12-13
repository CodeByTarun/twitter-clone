import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { hexToRGB } from '../../../helpers/Converters';
import { Text } from '../../Styled/MiscellaneousStyled';

const BlueBottom = styled.div`
  background-color: transparent;
  border-radius: 100px;
  height: 0.25rem;
  width: 110%;
  align-self: center;
  position: absolute;
  bottom: -1rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const TabLink = styled(NavLink)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  text-decoration: none;

  :hover {
    background-color: ${(p) => hexToRGB(p.theme.font.primary, 0.1)};
  }

  ${Text} {
    color: ${(p) => p.theme.font.secondary};
    font-weight: bold;
    text-align: center;
  }

  &.active {
    ${Container} > ${Text} {
      color: white;
    }

    ${Container} > ${BlueBottom} {
      background-color: ${(p) => p.theme.colors.accent};
    }
  }
`;

interface Props {
  text: string;
  path: string;
}

const NavigationTabButton: React.FC<Props> = ({ text, path }) => {
  return (
    <TabLink end to={path}>
      <Container>
        <Text>{text}</Text>
        <BlueBottom />
      </Container>
    </TabLink>
  );
};

export default NavigationTabButton;
