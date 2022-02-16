import React, { createContext, useContext, useEffect, useReducer } from 'react'

import AppStateInit from './AppStateInit'
import AppInitialState from './AppInitialState'
import AppReducer from './AppReducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( AppReducer, AppInitialState, AppStateInit );

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

	useEffect(() => {
    localStorage.setItem( "AppState", JSON.stringify(state) );
  }, [state] );

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
