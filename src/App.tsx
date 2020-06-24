import React, { Fragment } from 'react';

/* Pages */
import Home from './pages/Home';

/* Style */
import { GlobalStyle } from './react-components/styles/GlobalStyle';


const App = () => {
   return (
      <Fragment>
         <Home />
         <GlobalStyle />
      </Fragment>
   )
}

export default App;
