import './App.scss';

import { RPSProvider } from './components/RockPaperScissors/RPSContext';
import AppHeader from './components/App/AppHeader.js';
import AppFooter from './components/App/AppFooter.js';
import RockPaperScissors from './components/RockPaperScissors/RPSComponents/RockPaperScissors.js';

function App() {
  return (
    <div className="app p-6 flex items-center justify-center text-lg">
			<div className="app-container max-w-none lg:max-w-[800px] flex-grow">
				<AppHeader />
				<RPSProvider>
					<RockPaperScissors />
					<AppFooter /> { /* Footer uses resetAllRpsData() */}
				</RPSProvider>
			</div>
    </div>
  );
}

export default App;
