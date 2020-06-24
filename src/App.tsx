import React, { Fragment } from 'react';
/* Style */
import { GlobalStyle } from './react-components/styles/GlobalStyle';
import 'normalize.css/normalize.css';

/* Pages */
import Home from './pages/Home';



const App = () => {
   return (
      <Fragment>
         <GlobalStyle />
         <Home />
      </Fragment>
   )
}

export default App;
