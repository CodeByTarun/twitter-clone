import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    font: {
      primary: string;
      secondary: string;
    };

    colors: {
      background: string;
      accent: string;
      card: string;
      search: string;
      border: string;
      reply: string;
      cardHover: string;
      navigationHover: string;
    };
  }
}
