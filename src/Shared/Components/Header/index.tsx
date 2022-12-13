import React, { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'
import { hexToRGB } from '../../../helpers/Converters'
import { BackArrowIcon } from '../../Icons'
import { FixedWidthSpacer, HeaderText, SmallText, LinkStyled, FlexContainer } from '../../Styled/MiscellaneousStyled'
import { HeaderDiv, HeaderTextContainer } from '../../Styled/PageStyled'
import SvgStyled from '../../Styled/SvgStyled'

const BackLink = styled(LinkStyled)`
    height: 60%;
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding: 0.4rem;

    :hover {
        background-color: ${(props) => hexToRGB(props.theme.font.primary, 0.1)};
    }
`

interface HeaderProps {
    headerText: string;
    subHeaderText: string;
    backButtonLink?: string | null;
    tabs?: ReactNode[] | null;
}

const Header: React.FC<HeaderProps> = ({headerText, subHeaderText, backButtonLink = null, tabs = null}) => {

    const theme = useTheme();

    return (
        <FlexContainer isVertical={true}>
            <HeaderDiv>
                { (backButtonLink !== null) &&
                    <>
                        <BackLink to={backButtonLink}>
                            <SvgStyled color={theme.font.primary}>
                            <BackArrowIcon/>
                            </SvgStyled>
                        </BackLink>
                        <FixedWidthSpacer width='1rem'/>
                    </>
                }
                <HeaderTextContainer>
                    <HeaderText isBold>{headerText}</HeaderText>
                    <SmallText>{subHeaderText}</SmallText>
                </HeaderTextContainer>
            </HeaderDiv>
            { (tabs !== null) &&
                <FlexContainer isVertical={false}>
                    { tabs.map(tab => tab) }
                </FlexContainer>
            }
        </FlexContainer>
    )
}

export default Header