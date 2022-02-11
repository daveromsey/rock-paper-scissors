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
	gamesPlayed: 0,
	games: []
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( reducer, initialState );

	const playerShoot = (playerShot) => {
		dispatch( {type: 'PLAYER_SHOOT', payload: playerShot } );
		dispatch( {type: 'UPDATE_GAMES_PLAYED' } );
	};

	useEffect(() => {
		dispatch( {type: 'UPDATE_GAMES', payload: state.game } );
	}, [ state.gamesPlayed ] );

  return (
    <AppContext.Provider
      value={{
        ...state,
				playerShoot,
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
