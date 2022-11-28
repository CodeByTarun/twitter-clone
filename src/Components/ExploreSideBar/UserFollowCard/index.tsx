import React from 'react'
import { AccentText } from '../../../Shared/Styled/MiscellaneousStyled'
import { Widget, WidgetHeaderText } from '../styled';
import { UserFollowItem } from './UserFollowItem';

const UserFollowCard : React.FC<{}> = () => {
  return (
    <Widget>
      <WidgetHeaderText isBold={true}>
        Who to follow
      </WidgetHeaderText>
      <UserFollowItem/>
      <UserFollowItem/>
      <UserFollowItem/>
      <AccentText isBold={false}>
        Show more
      </AccentText>
    </Widget>
  )
}

export default UserFollowCard;