import React from 'react';
import { FaTrophy } from "react-icons/fa";
import Sparkles from 'react-sparkle'

const WinnerPlayer = () => {
	const colorGold = '#f3d014';
	const trophyClassNames = `text-[${colorGold}] relative top-[-4px]`;
	return (
		<span className="winner player inline-block relative">
			<FaTrophy className={`back-and-forth ${trophyClassNames}`}/>
			<span className="text-[#25d5f4cc]"> You Win! </span>
			<FaTrophy className={`back-and-forth-opposite ${trophyClassNames}`}/>
			<Sparkles
				color={colorGold}
				fadeOutSpeed={50}
				flicker={true}
				flickerSpeed={'slowest'}
				count={35}
			/>
		</span>
	);
}

export default WinnerPlayer;
