import { createGlobalStyle } from 'styled-components'

interface ITheme {
   theme: {
      bg: string,
      colorPrimary: string
   }
}

export const GlobalStyle = createGlobalStyle`
   :root {
      --bg: ${({theme}: ITheme) => theme.bg};
      --color-primary-light: #2b3137;
      --color-primary: ${({theme}: ITheme) => theme.colorPrimary};
      --color-green: #2dba4e;
   }

   *, *::after, *::before {
      box-sizing: border-box;
   }

   body {
      font-family: 'Lato', sans-serif;
   }

`