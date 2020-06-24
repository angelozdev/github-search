import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

   :root {
      --bg: #eee;
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