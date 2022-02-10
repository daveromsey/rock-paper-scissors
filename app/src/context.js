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
		dispatch( {type: 'UPDATE_GAMES',  payload: state.game } );

		// dispatch( {
		// 	type: 'UPDATE_GAMES',
		// 	payload: {
		// 		game: state.game,
		// 		games: state.games
		// 	}
		// } );

		//dispatch( {type: 'UPDATE_GAMES', payload: state.game } );
		//console.log({state});

		//const gamesUpdated = [...state.games, state.game];
		//state.games = gamesUpdated;

		//dispatch( {type: 'UPDATE_GAMES', payload: state.game } );
		//state.games.push( [state.game] );
		//console.log(`state.games`);
		//console.log(state);
	};

	// const updateGames = () => {
	// 	dispatch( {
	// 		type: 'UPDATE_GAMES',
	// 		payload: {
	// 			game: state.game,
	// 			games: state.games
	// 		}
	// 	} );
	// };

	// useEffect(() => {
	// 	dispatch( {type: 'UPDATE_GAMES_PLAYED' } )
	// }, [state.gamesPlayed] );

  return (
    <AppContext.Provider
      value={{
        ...state,
				playerShoot,
				//updateGames,
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
