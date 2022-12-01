import React from 'react'
import styled from 'styled-components'
import { ProfilePhoto } from '../../../../Shared/Components'
import { SecondaryText, Text } from '../../../../Shared/Styled/MiscellaneousStyled'
import { WidgetItem } from '../../styled'

const WidgetItemRow = styled(WidgetItem)`
  display: flex;
  align-items: center;
`

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0.8rem;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  ${Text}, ${SecondaryText} {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  };

  ${Text} {
    padding-bottom: 0.3rem;
  };
`

const FollowButton = styled.button`
  min-width: 80px;
  color: ${p => p.theme.colors.background};
  background: ${p => p.theme.font.primary};
  border-radius: 100px;
  height: 32px;
  font-weight: 600;
`;

export const UserFollowItem : React.FC<{}> = () => (
  <WidgetItemRow>
    <ProfilePhoto />
    <UsernameContainer>
      <Text isBold>CodeByTarun</Text>
      <SecondaryText as='a'>@CodeByTarundsfdfsdfsdffdsfsfsdfsdfddfsdfdssffdsfsfdsfsd</SecondaryText>
    </UsernameContainer>
    <FollowButton>
      Follow
    </FollowButton>
  </WidgetItemRow>
)


// 80