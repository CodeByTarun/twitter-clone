import React from 'react'
import styled from 'styled-components';
import { SecondaryText } from '../../../Shared/Styled/MiscellaneousStyled';

const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;

    ${SecondaryText}:nth-child(-n+6) {
        :hover {
            text-decoration: underline;
        }
    }

    ${SecondaryText} {
        padding-right: 0.75rem;
        font-size: 0.85rem;
        padding-bottom: 0.25rem;
        user-select: none;
    }
`

export const AboutSection : React.FC<{}> = () => {
  return (
    <AboutContainer>
        {AboutItems.map(item => <SecondaryText key={item}>{item}</SecondaryText>)}
        <SecondaryText>© 2022 Twitter, Inc.</SecondaryText>
    </AboutContainer>
  )
}

const AboutItems = ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility', 'Ads info', 'More'];
