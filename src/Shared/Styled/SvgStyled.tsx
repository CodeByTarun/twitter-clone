import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg<{svgColor: string}>`
    height: 100%;
    & path {
    fill: ${props => props.svgColor};
    }
`

interface Props {
    children?: React.ReactNode,
    color: string,
}

const SvgStyled: React.FC<Props> = ({ children, color }) => {

    return (
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" svgColor={color}>
            { children }
        </StyledSvg>
    )

}

export default SvgStyled;