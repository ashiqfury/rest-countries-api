import SearchIcon from '@mui/icons-material/Search';

const Inputs = () => {
	return (
		<section className="inputs">
			<div className="inputs__input">
				<SearchIcon className="inputs__input--icon" />
				<input type="text" required />
			</div>
			<div className="inputs__selection">
				<select>
					<option value="Filter by Region">Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
		</section>
	);
};

export default Inputs;
