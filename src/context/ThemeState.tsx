import React, { FC, useReducer } from 'react';
import { themeContext } from './themeContext';
import { reducer, TOGGLE_THEME } from './reducer'

const ThemeState: FC = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, { isLight: true })

   const toggleTheme = (): void => {
      dispatch({type: TOGGLE_THEME})
   }

   const value = {
      isLight: state.isLight,
      toggleTheme
   }

   return (
      <themeContext.Provider value={value}>
         {children}
      </themeContext.Provider>
   )
}

export default ThemeState;
