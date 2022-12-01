import styled from 'styled-components';
import { AccentText, HeaderText } from '../../Shared/Styled/MiscellaneousStyled';

export const ExploreSideBarDiv = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0.25rem 0;
  grid-column: 4;
`;

export const SearchBar = styled.div`
  background-color: ${(props) => props.theme.colors.search};
  color: ${(props) => props.theme.font.secondary};
  width: 100%;
  height: 2.75rem;
  border-radius: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 0.7rem 0 0.7rem 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.search};

  :focus-within {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.accent};

    & path {
      fill: ${(props) => props.theme.colors.accent};
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  border-width: 0;
  font-size: 0.9rem;
  font-weight: 400;
  margin-left: 1.2rem;
  color: ${(props) => props.theme.font.primary};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.font.secondary};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.font.secondary};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${(props) => props.theme.font.secondary};
  }

  :focus {
    outline: none;
  }
`;

export const Widget = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.card};
  margin-top: 1rem;
  border-radius: ${p => p.theme.borderRadius};
  color: ${p => p.theme.font.primary};

  ${AccentText} {
    padding: 1rem;
    padding-bottom: 1.2rem;
    border-bottom-left-radius: ${p => p.theme.borderRadius};
    border-bottom-right-radius: ${p => p.theme.borderRadius};
    user-select: none;

    :hover {
      background-color: ${p => p.theme.colors.cardHover};
    }
  }
`;

export const WidgetItem = styled.div`
  width: inherit;
  padding: 0.6rem 1rem;
  :hover {
    background-color: ${p => p.theme.colors.cardHover};
  }

`;

export const WidgetHeaderText = styled(HeaderText)`
padding: 1rem;
`



