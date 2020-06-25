import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ThemeState from './context/ThemeState';

render(
   <ThemeState>
      <App />
   </ThemeState>,
   document.querySelector('#root')
);