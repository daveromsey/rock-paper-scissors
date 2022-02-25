import React from 'react';
import { FaRobot } from "react-icons/fa";

const WinnerCPU = () => {
	return (
		<span className="winner cpu">
			<FaRobot className="laugh text-[#FF7003ee]"/>
			<span> You Lose </span>
			<FaRobot className="laugh text-[#FF7003ee]"/>
		</span>
	);
}

export default WinnerCPU;
