import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgFitter = styled.div<{ imageSource: string }>`
  background-image: url(${(props) => props.imageSource});
  background-repeat: no-repeat;
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export const OverlayDiv = styled.div`
  :hover {
    background-color: black;
    opacity: 0.9;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
