import styled from 'styled-components';
import { hexToRGB } from '../../../helpers/Converters';
import { SecondaryText } from '../../Styled/MiscellaneousStyled';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  padding-bottom: 0;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.border};
`;

export const TweetBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 0.75rem;
`;

export const TweetHeader = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  align-items: center;
  position: relative;

  ${SecondaryText} {
    padding-left: 0.3rem;
  }
`;

export const ThreeDots = styled.div`
  box-sizing: border-box;
  height: 2rem;
  width: 2rem;
  padding: 0.4rem;
  border-radius: 100px;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;

  :hover {
    background-color: ${(props) => hexToRGB(props.theme.colors.accent, 0.1)};

    & path {
      fill: ${(props) => props.theme.colors.accent} !important;
    }
  }
`;

export const TweetOptionButton = styled.a<{ hoverColor: string }>`
  display: flex;
  height: 100%;
  align-items: center;

  :hover {
    & ${SecondaryText} {
      color: ${(props) => props.hoverColor};
    }
  }

  & ${SecondaryText} {
    padding-left: 0.4rem;
  }
`;

export const TweetOptions = styled.div`
  display: flex;
  height: 2.2rem;
  max-width: 425px;
  margin: 0.3rem 0;

  & ${TweetOptionButton} {
    flex: 1;
  }

  & ${TweetOptionButton}:nth-child(4) {
    flex: 0;
  }
`;

export const IconContainer = styled.div<{ hoverColor: string }>`
  display: flex;
  flex-direction: row;
  height: 100%;
  border-radius: 100px;
  padding: 0.5rem;
  box-sizing: border-box;
  align-items: center;

  ${TweetOptionButton}:hover && {
    background-color: ${(props) => hexToRGB(props.hoverColor, 0.1)};

    & path {
      fill: ${(props) => props.hoverColor} !important;
    }
  }
`;
