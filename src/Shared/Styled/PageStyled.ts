import styled from 'styled-components';
import { HeaderText, IconButton, SmallText } from './MiscellaneousStyled';

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

  ${IconButton} {
    height: 65%;
  }
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0.8rem;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  ${HeaderText}, ${SmallText} {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  };

  ${HeaderText} {
    padding-bottom: 0.2rem;
  };
`

