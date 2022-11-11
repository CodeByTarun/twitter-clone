import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
    & path {
    fill: ${props => props.color};
  }
    :hover {
        fill: ${props => props.fill}
    }
`

interface Props {
    children?: React.ReactNode,
    color: string,
    hoverColor: string,
}

const SvgStyled: React.FC<Props> = ({ children, color, hoverColor }) => {

    return (
        <StyledSvg color={color} fill={hoverColor}>
            { children }
        </StyledSvg>
    )

}

export default SvgStyled;