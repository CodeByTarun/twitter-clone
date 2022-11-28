import React from 'react'
import styled from 'styled-components'
import { ProfilePhoto } from '../../../../Shared/Components'
import { Username } from '../../../../Shared/Components/Username'
import { WidgetItem } from '../../styled'

const WidgetItemRow = styled(WidgetItem)`
  display: flex;
  align-items: center;
`

const UsernameContainer = styled.div`
  flex: 1;
  padding: 0 1rem;
  box-sizing: border-box;
`

const FollowButton = styled.button`
  min-width: 80px;
  color: ${p => p.theme.colors.background};
  background: ${p => p.theme.font.primary};
  border-radius: 100px;
  height: 32px;
  font-weight: 600;
`;

export const UserFollowItem : React.FC<{}> = () => {
  return (
    <WidgetItemRow>
      <ProfilePhoto/>
      <UsernameContainer>
        <Username isRow={false} secondaryText={'@CodeByTarun'}/>
      </UsernameContainer>
      <FollowButton>
        Follow
      </FollowButton>
    </WidgetItemRow>
  )
}


// 80