import React from 'react';
import styled from 'styled-components';
import { HeaderText, Text } from '../../Shared/Styled/MiscellaneousStyled';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Error: React.FC<{}> = () => {
  return (
    <Container>
      <HeaderText>Oops!</HeaderText>
      <Text>Sorry, an unexpected error has occured.</Text>
    </Container>
  );
};

export default Error;
