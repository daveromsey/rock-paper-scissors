import AppInitialState from './AppInitialState'

const AppStateInit = (initialValue = AppInitialState) => {
	return JSON.parse( localStorage.getItem("AppState") ) || initialValue;
}

export default AppStateInit;
