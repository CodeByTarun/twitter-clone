import React from 'react'
import styled from 'styled-components';
import { StatText, Text } from '../../../../Shared/Styled/MiscellaneousStyled';
import { WidgetItem } from '../../styled';

const DiscoverItemContainer = styled(WidgetItem)`
  & ${Text} {
    padding: 0.2rem 0;
  }
`;

const DiscoverItem : React.FC<{}> = () => {
  return (
    <DiscoverItemContainer>
      <StatText>Sports - Trending</StatText>
      <Text isBold={true}>Celtics at Pelicans</Text>
      <StatText>24.9K Tweets</StatText>
    </DiscoverItemContainer>
  )
}

export default DiscoverItem;

