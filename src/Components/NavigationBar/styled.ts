import styled from 'styled-components';
import { hexToRGB } from '../../helpers/Converters';
import { devices } from '../../Shared/globalConstants';

export const NavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  box-sizing: border-box;
  padding: 0.25rem 0.75rem;

  @media only screen and (${devices.desktop}) {
    width: 275px;
  }
`;

export const NavigationOptionDiv = styled.div`
  display: flex;
  margin-bottom: 0.3rem;
  height: 3.25rem;
`;

export const TweetButton = styled.a`
  display: block;
  background-color: ${(props) => props.theme.colors.accent};
  box-sizing: border-box;
  border-radius: 100px;
  padding: 0.8rem;
  margin: 1rem 0rem;
  height: 3.25rem;
  width: 3.25rem;

  @media only screen and (${devices.desktop}) {
    height: auto;
    padding: 1rem;
    width: 90%;
    color: white;
    font-weight: bold;
    font-size: 1.05rem;
    text-align: center;
  }

  :hover {
    background-color: rgb(26, 140, 216);
  }
`;

export const ProfileButtonStyled = styled.a`
  background-color: transparent;
  display: flex;
  position: relative;
  bottom: 0;
  flex-direction: row;
  height: 3.25rem;
  width: 3.25rem;
  margin-bottom: 1rem;
  border-radius: 100px;
  align-items: center;
  justify-content: center;

  @media only screen and (${devices.desktop}) {
    height: auto;
    padding: 1rem;
    width: 90%;
  }

  & p {
    font-weight: bold;
    font-size: 1.05rem;
    color: ${(props) => props.theme.font.primary};
  }

  :hover {
    background-color: ${(props) => hexToRGB(props.theme.font.primary, 0.1)};
    opacity: 0.9;
  }
`;

// 1300 will be the width range
