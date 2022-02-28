import AppHeader from './components/App/AppHeader.js';
import AppFooter from './components/App/AppFooter.js';
import RockPaperScissors from './components/RockPaperScissors/RPSComponents/RockPaperScissors.js';

function App() {
  return (
    <div className="App text-lg p-6 flex justify-center">
			<div className="App-container lg:max-w-[800px] flex-grow">
				<AppHeader />
				<RockPaperScissors />
				<AppFooter />
			</div>
    </div>
  );
}

export default App;
