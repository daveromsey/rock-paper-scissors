import React, { createContext, useContext, useEffect, useRef, useReducer } from 'react'

import AppStateInit from './AppStateInit'
import AppInitialState from './AppInitialState'
import AppReducer from './AppReducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( AppReducer, AppInitialState, AppStateInit );

	const initialLoad = useRef(true);

	// TODO: Ideally, the charts should update when the theme color is updated.
	useEffect( () => {
		document.querySelector('.darkmode-switch').addEventListener('click', e => {
			console.log('darkmode-switch');
			document.querySelector('.update-chart').click();
		});

		// Bail on first paint.
		if ( initialLoad.current ) {
      initialLoad.current = false;
      return;
    }
	}, [initialLoad] );

	const updateTheme = ( theme ) => {
		dispatch( {type: 'UPDATE_THEME', payload: theme } );
	};

	const getTheme = () => {
		return state.theme;
	};

	const getThemeBool = ( theme ) => {
		switch (theme) {
			case 'light':
				return false;

				case 'dark':
					default:
						return true;
    }
	};
	const getOppositeTheme = ( theme ) => {
		switch (theme) {
      case 'dark':
				return 'light';

      case 'light':
				return 'dark';

			default:
				return state.theme;
    }
	};

  useEffect(() => {
    switch (state.theme) {
      case 'dark':
        document.querySelector('html').classList.add( 'dark' );
        break;

      case 'light':
      default:
        document.querySelector('html').classList.remove( 'dark' );
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
				getTheme,
				getThemeBool,
				getOppositeTheme,
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
