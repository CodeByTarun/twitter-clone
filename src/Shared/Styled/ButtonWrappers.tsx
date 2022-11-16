import React from "react";
import styled from "styled-components";
import { hexToRGB } from "../../helpers/Converters";

const IconButtonStyled = styled.div<{hoverColor: string, color: string}>`
    display: flex;
    flex-direction: row;
    height: 100%;
    border-radius: 100px;
    padding: 0.75rem;
    box-sizing: border-box;
    align-items: center;

    :hover {
        background-color:  ${props => hexToRGB(props.hoverColor, 0.1)};

        & path {
            fill: ${props => props.hoverColor} !important
        }
    }

    & p {
        padding-left: 1.25rem;
        font-size: 1.2rem;
    }
`

interface IconButtonProps {
    children?: React.ReactNode;
    color?: string;
    hoverColor?: string;
    fn: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ children, color = "", hoverColor = "", fn }) => {

    return (
        <IconButtonStyled color={color} hoverColor={hoverColor} onClick={fn}>
            { children }
        </IconButtonStyled>
    )
}

