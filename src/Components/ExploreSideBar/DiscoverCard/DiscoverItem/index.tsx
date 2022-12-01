import React from 'react'
import styled from 'styled-components';
import { SmallText, Text } from '../../../../Shared/Styled/MiscellaneousStyled';
import { WidgetItem } from '../../styled';

const DiscoverItemContainer = styled(WidgetItem)`
  display: flex;
  flex-direction: column;
  & ${Text} {
    padding: 0.2rem 0;
  }
`;

const DiscoverItem : React.FC<{}> = () => {
  return (
    <DiscoverItemContainer>
      <SmallText>Sports - Trending</SmallText>
      <Text isBold={true}>Celtics at Pelicans</Text>
      <SmallText>24.9K Tweets</SmallText>
    </DiscoverItemContainer>
  )
}

export default DiscoverItem;

