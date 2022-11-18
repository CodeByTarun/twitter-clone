import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  font: {
    primary: '#000000',
    secondary: '#71767B',
  },

  colors: {
    background: '#FFFFFF',
    accent: '#1d9bf0',
    card: '#F7F9F9',
    search: '#EFF3F4',
    border: '#EFF3F4',
    reply: '#CFD9DE',
    cardHover: '#EFF1F1',
    navigationHover: '#E6E7E7',
  },
  borderRadius: '',
};

const darkTheme: DefaultTheme = {
  font: {
    primary: '#D6D9DB',
    secondary: '#71767B',
  },

  colors: {
    background: '#000000',
    accent: '#1d9bf0',
    card: '#16181C',
    search: '#202327',
    border: '#333639',
    reply: '#333639',
    cardHover: '#1D1F23',
    navigationHover: '#181818',
  },
  borderRadius: '',
};

export { lightTheme, darkTheme };

// TODO: need to consider these colors
// replies and share hover : #1D9BF0 (text)
// retweet hover : #00BA7C (text)
// like hover : #F91880 (text)
// the background are the same color with an opacity applied

// Hovers could just be some opacity layer applied tbh
