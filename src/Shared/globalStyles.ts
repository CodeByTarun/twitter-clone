import { createGlobalStyle } from 'styled-components';
import TwitterChirp from "../assets/fonts/chirp-regular-web.woff";
import TwitterChirpBold from "../assets/fonts/chirp-bold-web.woff";
import TwitterChirpHeavy from "../assets/fonts/chirp-heavy-web.woff";

const GlobalStyle = createGlobalStyle`

// TwitterChirp font 
// normal: 400 bold: 700 heavy: 900
@font-face {
	font-family: "TwitterChirp";
	src: url(${TwitterChirpHeavy}) format('woff');
	font-weight: 900;
};

@font-face {
	font-family: "TwitterChirp";
	src: url(${TwitterChirpBold}) format('woff');
	font-weight: bold;
};

@font-face {
	font-family: "TwitterChirp";
	src: url(${TwitterChirp}) format('woff');
	font-weight: normal;
};

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	font-family: "TwitterChirp", -apple-system, BlinkMacSystemFont, 
	"Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {

}
body {
	line-height: 1;
	background-color: ${(props) => props.theme.colors.background};
	display: flex;
	justify-content: center;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

b {
	font-weight: bold;
	color:  ${(props) => props.theme.font.primary};
}
`;

export default GlobalStyle;

// body {
//   background-color: ${props => props.theme.colors.secondary};
// }
