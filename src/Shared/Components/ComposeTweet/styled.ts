import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const ProfileContainer = styled.div`
  height: 3rem;
  width: 3rem;
`;

export const TweetBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TweetInput = styled.textarea<{ hasText?: boolean }>`
  border-width: 0;
  resize: none;
  padding-bottom: 0.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.font.primary};
  ${(p) =>
    (p.hasText ?? false) &&
    `border-bottom: 1px solid ${p.theme.colors.border}`};
  font: inherit;
  font-size: 1.25em;
  margin-left: 1rem;

  :focus {
    outline: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  ::placeholder {
    color: ${(props) => props.theme.font.secondary};
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.font.secondary};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.font.secondary};
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 2.75rem;
  align-items: center;
  margin-top: 0.75rem;
`;

export const AttachmentOptions = styled.div`
  display: flex;
  height: 80%;
  padding-left: 1rem;
`;

export const TweetLimit = styled.span`
  padding: 0 1rem;
  color: ${(props) => props.theme.font.secondary};
  font-size: 0.8rem;
`;

export const TweetButton = styled.button`
  border-width: 0;
  color: ${(props) => props.theme.font.primary};
  font-weight: 600;
  font-size: 0.9rem;
  height: 80%;
  border-radius: 100px;
  box-sizing: border-box;
  display: block;
  background-color: ${(props) => props.theme.colors.accent};
  text-align: center;
  padding: 0 1rem;

  :hover {
    background-color: rgb(26, 140, 216);
  }

  :disabled {
    opacity: 0.4;

    :hover {
      background-color: ${(props) => props.theme.colors.accent};
    }
  }
`;
