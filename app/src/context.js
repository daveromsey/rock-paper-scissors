import React, { useState, useContext, useReducer, useEffect } from 'react'

import reducer from './reducer'

const AppContext = React.createContext();

const initialState = {
	game: {
		// startTime: null,
		// endTime: null,
		// inProgress: false,
		playerShot: null,
		cpuShot: null,
		winner: null,
	},
	games: []
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( reducer, initialState );

	const playerShoot = (playerShot) => {
		dispatch( {type: 'PLAYER_SHOOT', payload: playerShot } );
	};

  return (
    <AppContext.Provider
      value={{
        ...state,
				playerShoot,
				//cpuShoot,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Make sure use this.
export const useGlobalContext = () => {
  return useContext( AppContext )
}

export { AppContext, AppProvider }
