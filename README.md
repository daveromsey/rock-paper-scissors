# Rock Paper Scissors in React

**[Demo](https://daveromsey.github.io/rock-paper-scissors/)**

This is a Rock Paper Scissors game implemented in React. I created it as a learning exercise for for JavaScript, React, Tailwind, and other front-endy stuff.

In the future, this app may be expanded to provide [new features](#possible-future-enhancements) and gameplay options.

## Acknowledgements
- **Dependencies:** [Tailwind](https://tailwindcss.com/), [Dart Sass](https://github.com/sass/dart-sass), [Fontsource](https://fontsource.org/), [ChartJS v3](https://www.chartjs.org/docs/latest/), [Lodash](https://lodash.com/)
- **React Components:** [React Icons](https://react-icons.github.io/react-icons/), [react-chartjs2](https://github.com/reactchartjs/react-chartjs-2), [Animated Dark Mode Toggle](https://github.com/JoseRFelix/react-toggle-dark-mode), [Sparkle Component](https://github.com/kmjennison/react-sparkle)
- **Fonts:** [Paytone One](https://fonts.google.com/specimen/Paytone+One#standard-styles), [Open Sans](https://fonts.google.com/specimen/Open+Sans), [Digital-7](https://www.1001fonts.com/digital-7-font.html)


## Possible Future Enhancements

This is a list of things I'm considering for the future, roughly in order of priority.

- Allow keyboard controls:
  - A or left arrow (Rock), S or down arrow (Paper), D or right arrow (Scissors)
  - Space to reset
- Show score as  wins + -losses (score can be negative)
- Add stats and charts for results by shot: Win/Lose/Draw:Rock, etc.
- Settings: Rounds per match
  - Match (rename Game to Match)
  - Add Rounds
  - Modes:
    - Best of x rounds
    - First to x wins
    - First to x score (losses count as negative)
    - Fixed number of rounds: 1, 3, 5, x (form)
  - Stats/data structure will need to be reworked to accound for this.
  - Match
    - Settings [mode, numberOfRounds]
    - Results [startTime, endTime, winner]
    - Rounds [startTime, endTime, playerShot, cpuShot, winner]
  - Allow match to be ended early and data for that match will be discarded.
- Test mode to run x number of games automatically
- Opponents with various strategies (always same shot, random, based on player's shot patterns, etc)
- Timing based clicks with style points for accuracy and timeout for fault.
- Opponents with ladder like Mortal Kombat.
- Achievements
- Opponents that talk smack and hint as to what their strategy is.
- Multiplayer

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Built with Create React APP. View [readme.md](create-react-app-readme.md) file.