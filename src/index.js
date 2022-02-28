import React from 'react';
import ReactDOM from 'react-dom';

import { IconContext } from 'react-icons';

import './index.scss';
import App from './App';
import { AppProvider } from './global/AppContext';
import { RPSProvider } from './components/RockPaperScissors/RPSContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
		<AppProvider>
			<IconContext.Provider value={{ className: "react-icon icon" }}>
				<RPSProvider>
   	 			<App />
				</RPSProvider>
			</IconContext.Provider>
		</AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
