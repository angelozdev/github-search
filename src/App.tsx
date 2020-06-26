import React, { useContext } from 'react';

/* Style */
import { GlobalStyle } from './react-components/styles/GlobalStyle';
import { lightTheme, darkTheme } from './react-components/styles/theme';
import { ThemeProvider } from 'styled-components'
import 'normalize.css/normalize.css';

/* Pages */
import Home from './pages/Home';

/* Context */
import { themeContext } from './context/themeContext';

/* Redux */
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
   const { isLight } = useContext<any>(themeContext)
   return (
      <Provider store={store}>
         <ThemeProvider theme={isLight === true ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Home />
         </ThemeProvider>
      </Provider>
   )
}

export default App;
