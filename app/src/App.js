import logo from './logo.svg';
import './App.css';

import { RPSProvider } from './RPSContext';

import { useGlobalContext } from './context';

import RockPaperScissors from './components/rock-paper-scissors.js';

function App() {

	const { updateTheme } = useGlobalContext();

  return (
    <div className="app">
			<button className="update-theme" onClick={ () => updateTheme( 'dark' ) }>Update Theme</button>

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
