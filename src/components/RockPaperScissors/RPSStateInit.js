import RPSInitialState from './RPSInitialState'

const RPSStateInit = (initialValue = RPSInitialState) => {
	return JSON.parse( localStorage.getItem("RPSState") ) || initialValue;
}

export default RPSStateInit;
