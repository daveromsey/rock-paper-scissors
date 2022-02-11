// AppReducer function.
const AppReducer = (state, action) => {

	/**
	 * Handle updating the app theme.
	 */
	 if ( 'UPDATE_THEME' === action.type ) {

		const newTheme = action.payload;

		return {
			...state,
			theme: newTheme
		};
	}

	return state;
};

export default AppReducer;
