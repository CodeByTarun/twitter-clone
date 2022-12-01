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
// font sizes: 
// normal: 15px DONE
// header: 20px DONE
// small text: 13px DONE
// THESE ARE COMPONENT SPECIFIC:
// tweet button: 17px
// follow button: 14px 

export const Text = styled.span<{isBold? : boolean}>`
  color: ${(props) => props.theme.font.primary};
  /* line-height: 0.95rem;
  min-height: 1.1rem; */
  font-weight: ${p => (p.isBold != null) ? 'bold' : 400};
  font-size: 0.9375em;
`

export const SecondaryText = styled(Text)`
  color: ${(props) => props.theme.font.secondary};
`

export const AccentText = styled(Text)`
  color: ${p => p.theme.colors.accent};
`;

export const HeaderText = styled(Text)`
  font-size: 1.25em;
  font-weight: ${ p =>  (p.isBold != null) ? 700 : 400 };
`

export const SmallText = styled(SecondaryText)`
  font-size: 0.8125em;
  font-weight: ${ p =>  (p.isBold != null) ? 600 : 400 };
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