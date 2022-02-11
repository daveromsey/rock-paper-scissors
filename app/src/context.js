import React, { useState, useRef, useContext, useReducer, useEffect } from 'react'

import reducer from './RPSReducer'

const AppContext = React.createContext();

const initialState = {
	theme: 'light'
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( reducer, initialState );

	const updateTheme = ( theme ) => {
		dispatch( {type: 'UPDATE_THEME', payload: theme } );
	};

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext( AppContext )
}

export { AppContext, AppProvider }
