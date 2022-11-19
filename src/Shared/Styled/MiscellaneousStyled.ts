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

export const HeaderText = styled.h1<{isBold: boolean}>`
  font-size: 1.2rem;
  color: ${(props) => props.theme.font.primary};
  padding-right: 0.75rem;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  font-weight: 700;
`
