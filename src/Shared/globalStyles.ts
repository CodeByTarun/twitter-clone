import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
body {
  background-color: ${props => props.theme.colors.secondary};
}
`;

export default globalStyles; 