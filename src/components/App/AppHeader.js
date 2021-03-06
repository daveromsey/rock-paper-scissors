import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useAppContext } from '../../global/AppContext';

const AppHeader = () => {
	const { getTheme, getThemeBool, getOppositeTheme, updateTheme } = useAppContext();

	return (
		<header className="AppHeader flex">
			<section className="header-left flex flex-1 justify-start items-start"></section>

			<section className="header-center flex flex-1 justify-center items-center"></section>

			<section className="header-right flex flex-1 justify-end items-end">
				<DarkModeSwitch
					style={{ display: 'flex' }}
					checked={ getThemeBool( getOppositeTheme( getTheme() ) ) }
					onChange={ () => updateTheme( getOppositeTheme( getTheme() ) ) }
					size={25}
					moonColor='#341C47'
					sunColor='#E6C1E3'
					className='darkmode-switch'
				/>
			</section>
		</header>
	);
}

export default AppHeader;