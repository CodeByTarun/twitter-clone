import styled from "styled-components";

export const ImgFitter = styled.div<{ imageSource: string }>`
    background-image: url(${(props) => props.imageSource});
    background-repeat: no-repeat;
    object-fit: contain;
    height: 100%;
    width: 100%;
`
