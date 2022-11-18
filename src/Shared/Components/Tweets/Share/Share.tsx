import React from 'react'
import { ShareIcon } from '../../../Icons'
import SvgStyled from '../../../Styled/SvgStyled'
import { TweetOptionButton } from '../styled'

export const Share : React.FC<{}> = () => {


  return (
    <TweetOptionButton color={'white'}>
        <div>
            <SvgStyled color={'white'}>
                <ShareIcon/>
            </SvgStyled>
        </div>
    </TweetOptionButton>
  )
}
