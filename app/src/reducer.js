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
		switch (action.payload) {
			case 'rock':
				console.log('Reducer. SHOOT:rock');
				break;

			case 'paper':
				console.log('Reducer. SHOOT:paper');
				break;

			case 'scissors':
				console.log('Reducer. SHOOT:scissors');
				break;

			default:
				throw new Error( 'Invalid shot type.' );
		}

		state.game.playerShot = action.payload;
		state.game.cpuShot    = cpuShoot();
		state.game.winner     = getGameResult(
			state.game.playerShot,
			state.game.cpuShot
		);

		return { // Always return state.
			...state
		};
	}

	// if ( 'CPU_SHOOT' === action.type ) {

	// 	state.game.cpuShot = action.payload;

	// 	return { // Always return state.
	// 		...state
	// 	};
	// }

	return state;
};

export default reducer;