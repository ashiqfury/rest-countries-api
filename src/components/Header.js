// import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
// import Brightness2Icon from '@mui/icons-material/Brightness2';
import { Brightness2Outlined, Brightness2 } from '@mui/icons-material';

const Header = () => {
	return (
		<header className="header">
			<h1 className="header--text">Where in the world?</h1>
			<div className="header__theme">
				<Brightness2Outlined className="header__theme--icon dark" />
				<span className="header__theme--text">Dark Mode</span>
			</div>
		</header>
	);
};

export default Header;
