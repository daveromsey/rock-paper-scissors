// AppReducer function.
const AppReducer = (state, action) => {

	switch ( action.type ) {
		case ( 'UPDATE_THEME' ):
			/**
			 * Handle updating the app theme.
			 */
			const newTheme = action.payload;

			return {
				...state,
				theme: newTheme,
				somethingElse: Math.random()
			};

		default:
			return state;
	}
};

export default AppReducer;
