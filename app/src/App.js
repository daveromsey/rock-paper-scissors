//import logo from './logo.svg';
import './App.scss';

import { RPSProvider } from './components/RockPaperScissors/RPSContext';
import AppHeader from './components/App/AppHeader.js';
import AppFooter from './components/App/AppFooter.js';
import RockPaperScissors from './components/RockPaperScissors/RPSComponents/RockPaperScissors.js';

function App() {
  return (
    <div className="app p-6 flex items-center justify-center">
			<div className="app-container grid grid-cols-1 max-w-none lg:max-w-[800px] flex-grow">
				<AppHeader />

				<RPSProvider>
					<RockPaperScissors />
					<AppFooter /> { /* Footer uses resetAllRpsData() */}
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
