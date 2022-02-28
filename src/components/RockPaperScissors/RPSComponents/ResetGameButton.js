import { MdDoubleArrow } from "react-icons/md";

import { useRPSContext } from '../RPSContext';

const ResetGameButton = () => {
	const { resetGame } = useRPSContext();

  return (
		<button onClick={ () => resetGame() } className="play-again invisible flex-grow mt-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-center border rounded-md
			text-retropurple-600 border-retropurple-600
			hover:text-retropurple-100 hover:bg-retropurple-600
			dark:text-retropurple-100 dark:border-retropurple-100
			dark:hover:bg-retropurple-600"
		>
			<span className="button-text">Play Again </span><span className="button-icon relative top-[-2px]"><MdDoubleArrow size={20} /></span>
		</button>
  )
}

export default ResetGameButton;
