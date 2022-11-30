import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { hexToRGB } from '../../helpers/Converters';

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

export const FixedWidthSpacer = styled.div<{width: string}>`
  height: 100%;
  width: ${p => p.width};
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

// FONTS

export const Text = styled.p<{isBold? : boolean}>`
  color: ${(props) => props.theme.font.primary};
  line-height: 0.95rem;
  min-height: 1.1rem;
  font-weight: ${p => (p.isBold != null) ? 'bold' : 400};
  font-size: 0.9375em;
`
export const HeaderText = styled.p<{isBold: boolean}>`
  font-size: 1.2rem;
  color: ${(props) => props.theme.font.primary};
  padding-right: 0.75rem;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  font-weight: ${ p => p.isBold ? 700 : 400 };
`


export const SecondaryText = styled(Text)`
  color: ${(props) => props.theme.font.secondary};
`

export const AccentText = styled(Text)`
  color: ${p => p.theme.colors.accent};
`;

export const TweetText = styled.p`
`

export const StatText = styled.p`
  color: ${(props) => props.theme.font.secondary};
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1rem;
  min-height: 1.2rem;
`

// Buttons
export const IconButton = styled.button<{ hoverColor: string, padding?: string }>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-style: none;
  border-radius: 100px;
  height: 100%;
  padding: ${(p) => (p.padding != null) ? p.padding : '0'};

  :hover {
    background-color: ${(props) => hexToRGB(props.hoverColor, 0.1)};
  }
`