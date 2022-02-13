//import logo from './logo.svg';
import './App.scss';

import { useAppContext } from './global/AppContext';
import { RPSProvider } from './components/RockPaperScissors/RPSContext';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors.js';

function App() {

	const { updateTheme } = useAppContext();

  return (
    <div className="app p-6 flex items-center justify-center">
			<div className="app-container grid grid-cols-1 max-w-none lg:max-w-[800px] flex-grow">

				<div className="app-controls-container">
					<button className="update-theme" onClick={ () => updateTheme( 'dark' ) }>Use Dark Theme</button>
					<button className="update-theme" onClick={ () => updateTheme( 'light' ) }>Use Light Theme</button>
				</div>

				<RPSProvider>
					<RockPaperScissors />
				</RPSProvider>
			</div>
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
