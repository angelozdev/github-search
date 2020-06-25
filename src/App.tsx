import React, { useState } from 'react';

/* Style */
import { GlobalStyle } from './react-components/styles/GlobalStyle';
import { lightTheme, darkTheme } from './react-components/styles/theme';
import { ThemeProvider } from 'styled-components'
import 'normalize.css/normalize.css';

/* Pages */
import Home from './pages/Home';

const App = () => {
   const [light, setTheme] = useState(true)
   return (
      <ThemeProvider theme={light === true ? lightTheme : darkTheme}>
         <GlobalStyle />
         <Home />
         <button onClick={() => setTheme(!light)}>Dark Mode</button>
      </ThemeProvider>
   )
}

export default App;
