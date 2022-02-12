//import logo from './logo.svg';
import './App.scss';

import { useAppContext } from './global/AppContext';
import { RPSProvider } from './components/RockPaperScissors/RPSContext';

import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors.js';

function App() {

	const { updateTheme } = useAppContext();

  return (
    <div className="app p-6 bg-royalpurple-50">
			<button className="update-theme" onClick={ () => updateTheme( 'dark' ) }>Use Dark Theme</button>
			<button className="update-theme" onClick={ () => updateTheme( 'light' ) }>Use Light Theme</button>

			<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
				<div>
					<div className="text-xl font-medium text-black">ChitChat</div>
					<p className="text-slate-500">You have a new message!</p>
				</div>
			</div>

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
