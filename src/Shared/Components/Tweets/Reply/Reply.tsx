import React from 'react'
import { useTheme } from 'styled-components'
import { ReplyIcon } from '../../../Icons'
import SvgStyled from '../../../Styled/SvgStyled'
import { IconContainer, TweetOptionButton } from '../styled'

export const Reply : React.FC<{}> = () => {

    const theme = useTheme();

  return (
    <TweetOptionButton color={theme.colors.accent}>
        <IconContainer>
            <SvgStyled color={theme.font.primary}>
                <ReplyIcon/>
            </SvgStyled>
        </IconContainer>
    </TweetOptionButton>
  )
}
