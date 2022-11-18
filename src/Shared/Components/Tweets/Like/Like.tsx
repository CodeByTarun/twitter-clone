import React from 'react'
import { LikeIcon } from '../../../Icons'
import SvgStyled from '../../../Styled/SvgStyled'
import { TweetOptionButton } from '../styled'

export const Like : React.FC<{}> = () => {
  return (
    <TweetOptionButton color='white'>
        <SvgStyled color={'white'}>
            <LikeIcon/>
        </SvgStyled>
    </TweetOptionButton>
  )
}
