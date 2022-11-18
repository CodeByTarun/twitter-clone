import styled from 'styled-components';
import { hexToRGB } from '../../../helpers/Converters';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
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

  & span {
    line-height: 0.95rem;
    min-height: 1.1rem;
  }

  & span:nth-of-type(2) {
    white-space: pre;
    color: ${(props) => props.theme.font.secondary};
  }
`;

export const TweetText = styled.p``;

export const TweetOptions = styled.div`
  display: flex;
  padding-top: 1rem;
  height: 1.2rem;
  max-width: 425px;
  justify-content: space-between;
`;

export const ThreeDots = styled.div`
    box-sizing: border-box;
    height: 1.4rem;
    width: 1.4rem;
    padding: 0.2rem;
    border-radius: 100px;

    :hover {
        background-color: ${(props) => hexToRGB(props.theme.font.primary, 0.1)};
    }
`;

export const TweetOptionButton = styled.a<{color: string}>`
    display: flex;
    height: 100%;

    :hover {
        & div {
            border-radius: 100px;

        }
    }
`

export const IconContainer = styled.div`
`