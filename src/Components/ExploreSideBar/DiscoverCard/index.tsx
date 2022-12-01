import React from 'react'
import { AccentText } from '../../../Shared/Styled/MiscellaneousStyled'
import { Widget, WidgetHeaderText } from '../styled'
import DiscoverItem from './DiscoverItem'

export const DiscoverCard : React.FC<{}> = () => {
  return (
    <Widget>
        <WidgetHeaderText isBold>
            What&apos;s happening
        </WidgetHeaderText>
        <DiscoverItem/>
        <DiscoverItem/>
        <DiscoverItem/>
        <DiscoverItem/>
        <AccentText>Show more</AccentText>
    </Widget>
  )
}