import React from 'react';
import { AccentText } from '../../../Shared/Styled/MiscellaneousStyled';
import { Widget, WidgetHeaderText } from '../styled';
import { UserFollowItem } from './UserFollowItem';

const UserFollowCard: React.FC<{}> = () => {
  return (
    <Widget>
      <WidgetHeaderText isBold>Who to follow</WidgetHeaderText>
      <UserFollowItem />
      <UserFollowItem />
      <UserFollowItem />
      <AccentText>Show more</AccentText>
    </Widget>
  );
};

export default UserFollowCard;
