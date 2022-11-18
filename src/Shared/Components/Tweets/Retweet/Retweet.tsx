import React from 'react'
import { RetweetIcon } from '../../../Icons'
import SvgStyled from '../../../Styled/SvgStyled'
import { TweetOptionButton } from '../styled'

export const Retweet : React.FC<{}> = () => {
  return (
    <TweetOptionButton color='white'>
        <SvgStyled color={'white'}>
            <RetweetIcon/>
        </SvgStyled>
    </TweetOptionButton>
  )
}
