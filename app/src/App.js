//import logo from './logo.svg';
import './App.scss';

import {
	// FaMedal,
	// FaAward,
	// FaTrophy,
	// FaRegSadCry,
	// FaCat,
	// FaRegWindowClose,
	// FaWindowClose,
	// FaRegTrashAlt,
	FaRegHandRock,
	FaRegHandPaper,
	FaRegHandScissors,
	FaHandRock,
	// FaHandPaper,
	// FaHandScissors,
	// FaRedoAlt,
	FaRedo
} from "react-icons/fa";

import { useAppContext } from './global/AppContext';
import { RPSProvider } from './components/RockPaperScissors/RPSContext';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors.js';

function App() {

	const { updateTheme } = useAppContext();

  return (
    <div className="app p-6 flex items-center justify-center">
			<div className="app-container grid grid-cols-1 max-w-none lg:max-w-[800px] flex-grow">

				<header className="app-header">
					<div className="app-controls-container">
						<button className="update-theme" onClick={ () => updateTheme( 'dark' ) }>Use Dark Theme</button>
						<button className="update-theme" onClick={ () => updateTheme( 'light' ) }>Use Light Theme</button>
					</div>
				</header>

				<RPSProvider>
					<RockPaperScissors />
				</RPSProvider>

			<div className="fancy-hr relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400">
					<FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/>
				</span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>



				<footer className="app-footer">
					By Dave Romsey - Github
				</footer>
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
