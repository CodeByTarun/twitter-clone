import React from 'react'
import styled from 'styled-components'
import { hexToRGB } from '../../../helpers/Converters'
import { LinkStyled, Text } from '../../Styled/MiscellaneousStyled'

const TabLink = styled(LinkStyled)<{$isActive: boolean}>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  :hover {
    background-color: ${p => hexToRGB(p.theme.font.primary, 0.1)};    
  }

  ${Text} {
    color: ${p => p.$isActive ? p.theme.font.primary : p.theme.font.secondary};
    font-weight: bold; 
    text-align: center;
  }
`

const Container = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const BlueBottom = styled.div`
  background-color: ${p => p.theme.colors.accent};
  border-radius: 100px;
  height: 0.25rem;
  width: 110%;
  align-self: center; 
  position: absolute;
  bottom: -1rem;
`

interface Props {
    text: string;
    path: string;
    isActive: boolean;
}

const NavigationTabButton : React.FC<Props> = ({text, path, isActive}) => {
  return (
    <TabLink to={path} $isActive={isActive}>
      <Container>
        <Text>{text}</Text>
        { isActive && <BlueBottom/> }
      </Container>
    </TabLink>
  )
}

export default NavigationTabButton