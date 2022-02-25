import React from 'react';
import { FaTrophy } from "react-icons/fa";
import Sparkles from 'react-sparkle'

const WinnerPlayer = () => {
	return (
		<span className="winner player inline-block relative">
			<FaTrophy className="text-[#f3d014] relative top-[-4px] back-and-forth"/>
			<span className="text-[#25d5f4cc]"> You Win! </span>
			<FaTrophy className="text-[#f3d014] relative top-[-4px] back-and-forth-opposite"/>
			<Sparkles color={"#f3d014"} fadeOutSpeed={50} flicker={true} flickerSpeed={'slowest'} count={35}/>
		</span>
	);
}

export default WinnerPlayer;
