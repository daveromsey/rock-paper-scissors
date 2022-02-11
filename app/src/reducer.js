// Reducer function.
const reducer = (state, action) => {

	const shots = [
		'rock',
		'paper',
		'scissors',
	];

	const cpuShoot = () => {
		return shots[ Math.floor( Math.random() * shots.length ) ];
	};

	const getGameResult = ( playerShot, cpuShot ) => {
		if ( playerShot === cpuShot ) {
			return 'tie';
		}

		if (
		  ( 'rock' === playerShot && 'scissors' === cpuShot ) ||
			( 'paper' === playerShot && 'rock' === cpuShot ) ||
			( 'scissors' === playerShot && 'paper' === cpuShot )
		) {
			return 'player';
		}

		if (
			( 'scissors' === playerShot && 'rock' === cpuShot ) ||
			( 'rock' === playerShot && 'paper' === cpuShot ) ||
			( 'paper' === playerShot && 'scissors' === cpuShot )
		) {
			return 'cpu';
		}

		// If we get here, something went wrong.
		return null;
	};

	if ( 'PLAYER_SHOOT' === action.type ) {

		if ( ! shots.includes( action.payload ) ) {
			throw new Error( 'Invalid shot type.' );
		}

		const newcpuShot = cpuShoot();
		const newplayerShot = action.payload;
		const newgameWinner = getGameResult( newcpuShot, newplayerShot );

		return {
			...state,
			game: {
				cpuShot: newcpuShot,
				playerShot: newplayerShot,
				winner: newgameWinner
			}
		};
	}

	if ( 'UPDATE_GAMES_PLAYED' === action.type ) {
		return {
			...state,
			gamesPlayed: state.gamesPlayed + 1
		};
	}

	if ( 'UPDATE_GAMES' === action.type ) {
		// payload is the game.

		// If the game has not finished, don't add it to the history.
		if ( null === action.payload.winner ) {
			return {
				...state,
			};
		}

		const updatedGames = [ ...state.games, action.payload ];

		return {
			...state,
			games: updatedGames
		};
	}

	return {
		...state
	};
};

export default reducer;