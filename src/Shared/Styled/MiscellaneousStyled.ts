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

export const FlexContainer = styled.div<{isVeritcal?: boolean}>`
  display: flex;
  ${p => (p.isVeritcal !== null) && 'flex-direction: column;'};
`

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
  ${p => (p.isBold != null) ? 'font-weight: bold' : 'font-weight: normal'};
  font-size: 0.9375em;
  line-height: 1.15rem;
`

export const SecondaryText = styled(Text)`
  color: ${(props) => props.theme.font.secondary};
`

export const AccentText = styled(Text)`
  color: ${p => p.theme.colors.accent};
`;

export const HeaderText = styled(Text)`
  font-size: 1.25em;
`

export const SmallText = styled(SecondaryText)`
  font-size: 0.8125em;
`

// Buttons
export const IconButton = styled.button<{ hoverColor: string, padding?: string }>`
  display: flex;
  align-items: center;
  background-color: transparent;
  font: inherit;
  border-style: none;
  border-radius: 100px;
  height: 100%;
  padding: ${(p) => (p.padding != null) ? p.padding : '0'};

  :hover {
    background-color: ${(props) => hexToRGB(props.hoverColor, 0.1)};
  }
`

export const Button = styled.button`
  min-width: 80px;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font: inherit;
  font-weight: bold;
`