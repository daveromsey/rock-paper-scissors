import logo from './logo.svg';
import './App.css';

import { RPSProvider } from './RPSContext';

import { useAppContext } from './AppContext';

import RockPaperScissors from './components/rock-paper-scissors.js';

function App() {

	const { updateTheme } = useAppContext();

  return (
    <div className="app">
			<button className="update-theme" onClick={ () => updateTheme( 'dark' ) }>Use Dark Theme</button>
			<button className="update-theme" onClick={ () => updateTheme( 'light' ) }>Use Light Theme</button>

			<RPSProvider>
				<RockPaperScissors />
			</RPSProvider>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
