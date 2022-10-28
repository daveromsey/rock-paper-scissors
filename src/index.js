import React from 'react';
import { createRoot } from 'react-dom/client';

import { IconContext } from 'react-icons';

import './index.scss';
import App from './App';
import { AppProvider } from './global/AppContext';
import { RPSProvider } from './components/RockPaperScissors/RPSContext';
import reportWebVitals from './reportWebVitals';

// React 18: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const container = document.getElementById('root');
const root      = createRoot(container);

root.render(
	<React.StrictMode>
		<AppProvider>
			<IconContext.Provider value={{ className: "react-icon icon" }}>
				<RPSProvider>
					<App />
				</RPSProvider>
			</IconContext.Provider>
		</AppProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
