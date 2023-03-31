import React, { createContext, useContext, useEffect, useReducer } from 'react'

/**
 * Initialize the state of the app.
 *
 * Currently, only the theme setting is stored here.
 *
 * Attempts to uses local storage first and falls back to
 * defaults if value has not been set.
 */
import AppStateInit from './AppStateInit';

/**
 * The default initial state.
 */
import AppInitialState from './AppInitialState'

/**
 * Handles updating the App state.
 */
import AppReducer from './AppReducer'

/**
 * The App Context.
 */
const AppContext = createContext();

/**
 * The App Provider
 */
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( AppReducer, AppInitialState, AppStateInit );

	/**
	 * Handles updating the theme state.
	 *
	 * @param {string} theme The name of the theme. 'dark'|'light'. Default: 'dark'.
	 */
	const updateTheme = ( theme ) => {
		dispatch( {type: 'UPDATE_THEME', payload: theme } );
	};

	/**
	 * Gets the currently saved theme value.
	 * 'dark'|'light'. Default: 'dark'.
	 *
	 * @return {boolean} False for 'light', True for 'dark' or other value.
	 */
	const getTheme = () => {
		return state.theme;
	};

	/**
	 * Gets the boolean value of the specified theme.
	 *
	 * @param {string} theme The name of the theme. 'dark'|'light'. Default: 'dark'.
	 *
	 * @return {boolean} False for 'light', True for 'dark' or other value.
	 */
	const getThemeBool = ( theme ) => {
		switch (theme) {
			case 'light':
				return false;

				case 'dark':
					default:
						return true;
    }
	};

	/**
	 * Gets the opposite value of the specified theme.
	 *
	 * @param {string} theme The name of the theme. 'dark'|'light'. Default: 'dark'.
	 *
	 * @return {string} The opposite of the specified theme.
	 */
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

	/**
	 * Handles adding the theme HTML class to the <html> tag (used for styling),
	 * and saving the theme state to local storage when the theme is changed.
	 *
	 * @param {string} theme The name of the theme. 'dark'|'light'. Default: 'dark'.
	 */
  useEffect(() => {
		// Set the theme class.
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
