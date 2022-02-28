import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import Sparkles from 'react-sparkle'

const WinnerPlayer = () => {
	const colorGold = '#f3d014'; // Tailwind does not work with color class created with a template literal https://stackoverflow.com/a/66331393/3059883
	const trophyClassNames = `relative top-[-4px]`;
	return (
		<span className="WinnerPlayer inline-block relative">
			<FaTrophy className={`back-and-forth text-[#f3d014] ${trophyClassNames}`}/>
			<span className="text-[#25d5f4cc]"> You Win! </span>
			<FaTrophy className={`back-and-forth-reverse text-[#f3d014] ${trophyClassNames}`}/>
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
