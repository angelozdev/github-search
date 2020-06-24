import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
      --bg: #f1f1f1;
      --color-primary-light: #2b3137;
      --color-primary: #24292e;
      --color-green: #2dba4e;
   }

   *, *::after, *::before {
      box-sizing: border-box;
   }

   body {
      font-family: 'Lato', sans-serif;
   }

`