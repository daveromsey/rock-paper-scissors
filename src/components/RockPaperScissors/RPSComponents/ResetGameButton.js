import { MdDoubleArrow } from "react-icons/md";

import { useRPSContext } from '../RPSContext';

const ResetGameButton = () => {
	const { resetGame } = useRPSContext();

  return (
		<button onClick={ () => resetGame() } className="ResetGameButton play-again
			invisible border rounded-md flex-grow mt-8 mr-2 mb-2 px-5 py-2.5 font-medium text-sm text-center
			text-retropurple-600 border-retropurple-600
			hover:text-retropurple-100 hover:bg-retropurple-600
			dark:text-retropurple-100 dark:border-retropurple-100
			dark:hover:bg-retropurple-600"
		>
			<span className="button-text">Play Again </span>
			<span className="button-icon relative top-[-1px]"><MdDoubleArrow size={20} /></span>
		</button>
  )
}

export default ResetGameButton;
