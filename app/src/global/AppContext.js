import React, { useContext, useEffect, useReducer } from 'react'

import AppReducer from './AppReducer'

const AppContext = React.createContext();

const initialStateApp = {
	theme: 'light'
}

const AppProvider = ( { children } ) => {
  const [state, dispatch] = useReducer( AppReducer, initialStateApp );

	const updateTheme = ( theme ) => {
		dispatch( {type: 'UPDATE_THEME', payload: theme } );
	};

  useEffect(() => {
    switch (state.theme) {
      case 'dark':
        document.body.classList.add( 'theme-dark' );
        break;

      case 'light':
      default:
        document.body.classList.remove( 'theme-dark' );
        break;
    }
  }, [state.theme] );

  return (
    <AppContext.Provider
      value={{
        ...state,
				updateTheme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext( AppContext )
}

export { AppContext, AppProvider }
