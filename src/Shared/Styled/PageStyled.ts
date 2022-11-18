import styled from 'styled-components';

export const PageViewDiv = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.font.primary};
  border-style: solid;
  border-width: 0px 1px;
  border-color: ${(props) => props.theme.colors.border};
`;

export const HeaderDiv = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderText = styled.h1`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const TopTweets = styled.div`
  height: 70%;
`;
